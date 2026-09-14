# BTC Bot

## Diseño


Modular, mantenible e independiente del proveedor de datos o la interfaz final (terminal, Telegram, Discord, etc.),

Arquitectura por capas:

1. PRESENTACIÓN (UI / CLI):
Muestra los datos en pantalla y controla el ciclo/loop

2. LÓGICA DE NEGOCIO (Domain/Service):
Procesa, valida, formatea precios o gestiona alertas

3. CAPA DE INFRAESTRUCTURA (Data / API Client)
Se conecta a la API externa (Binance, CoinGecko, etc.)


Responsabilidades

1. Infraestructura (infrastructure / api_client):

Función: Conectarse con el mundo exterior (APIs públicas de criptomonedas).

Objetivo: Consultar la API (por ejemplo, Binance o CoinGecko) usando HTTP (requests o httpx)
y devolver la respuesta cruda o parseada a un diccionario/modelo simple.

Si la API cambia o decide pasar de Binance a CoinGecko, solo modifica este archivo sin tocar el resto de la aplicación


2. Lógica de Negocio (core / price_service): 

Función: Contener la regla del bot.

Objetivo: Recibir los datos de la capa de infraestructura, transformar el valor flotante a un formato legible (ej. $65,432.10 USD)
calcular variaciones porcentuales o comprobar si el precio superó un umbral de alerta.

Ventaja: La lógica de formateo y cálculo queda aislada de las peticiones HTTP y de cómo se muestran los datos


3. Presentación (presentation / main):

Función: Interfaz de usuario y orquestación del tiempo.

Objetivo: Ejecutar el bucle de actualización en tiempo real (por ejemplo, cada $N$ segundos)
invocar al servicio de negocio y mostrar el resultado en consola, un widget o un bot de chat


Estructura:

btc_tracker/
│── infrastructure/
│   └── crypto_api.py      # Cliente HTTP para consultar la API externa
│── core/
│   └── price_service.py   # Procesamiento del precio y formateo
│── presentation/
│   └── main.py            # Bucle de ejecución en tiempo real (CLI)
│── requirements.txt       # Dependencias (requests)
└── config.py              # Parámetros (intervalo de tiempo, moneda)


Flujo de datos

1. main.py se ejecuta e inicia un bucle (while True).
2. Solicita el precio al servicio price_service.py.
3. price_service.py llama a crypto_api.py para obtener el dato crudo de la red.
4. crypto_api.py realiza la petición GET a la API pública de Bitcoin y devuelve la cifra básica.
5. price_service.py aplica el formato de moneda y calcula cambios respecto a la lectura anterior.
6. main.py recibe el resultado formateado y lo imprime con su marca de tiempo.



## Entorno de desarrollo

1. uv

```
uv init btc_tracker
cd btc_tracker
```
generará la estructura base con un archivo pyproject.toml e instanciará un entorno virtual .venv aislado automáticamente


2. Instalar dependencias de producción y desarrollo

librería de peticiones HTTP para el proyecto y las herramientas dev (incluyendo pudb como depurador visual en terminal y los tipos de requests para validación estática):

```
# Dependencia principal
uv add requests

# Dependencias de desarrollo
uv add --dev mypy pytest pudb types-requests
```


3. Configurar herramientas en pyproject.toml

Añade al final de tu archivo pyproject.toml la configuración para controlar la estrictez de mypy y la detección de tests de pytest:

```
[tool.mypy]
python_version = "3.12"
strict = true
ignore_missing_imports = true

[tool.pytest.ini_options]
testpaths = ["tests"]
python_files = ["test_*.py"]
```


4. Verificar entorno

```
# Verificar tipado estático
uv run mypy .

# Ejecutar suite de pruebas
uv run pytest

# Probar la invocación del debugger
uv run python -m pudb -e "print('PuDB configurado correctamente')"

``` 



## Ruta

Desde la capa más externa (datos) hacia la interfaz de usuario

```
1. Infraestructura ──► Código + Test (`pytest`) + Verificación (`mypy`)

2. Lógica de Negocio ─► DTOs + Código + Test + Verificación

3. Presentación ─────► Bucle principal (`main.py`) + Manejo de errores

4. Depuración ────────► usar `pudb` para inspeccionar el flujo en vivo
```


Módulo

1. Diseño y Contrato:
problema resuelve la función o clase, qué entradas recibe y qué salidas devuelve.

2. Implementación:
Python completo con type hints estrictos (strict = true).

3. Desglose:
Analizamos las líneas clave para entender el porqué de cada decisión técnica

4. Pruebas Unitarias:
Test correspondiente en tests/ usando pytest
(e integrando unittest.mock para no realizar peticiones HTTP reales a la API durante las pruebas)

5. Verificación:
comandos de validación de tipado (uv run mypy .) y pruebas (uv run pytest).



# 1. infrastructure/crypto_api.py: conexión, data, requests

#### Responsabilidad: comunicarse con la API externa
Ej, la API pública de Binance
obtener el dato crudo del precio de Bitcoin en USD (BTC/USDT).
##### Si la API cambia o falla, solo este módulo se ve afectado.

1. Diseño y Contrato

Entrada: Ninguna (o la URL base configurada).

Salida: Un valor numérico float con el precio actual de Bitcoin.

Excepciones: Capturaremos cualquier error de red o de parseo JSON y lo lanzaremos como una excepción propia (CryptoApiError).
##### De este modo, las capas superiores no necesitan conocer detalles de bajo nivel de requests.


2. Código: infrastructure/crypto_api.py

```
import requests


class CryptoApiError(Exception):
    """Excepción personalizada para errores de la API externa."""

    pass


class CryptoApiClient:
    """Cliente encargado exclusivamente de la comunicación con la API pública de criptomonedas."""

    def __init__(self, base_url: str = "https://api.binance.com/api/v3") -> None:
        self.base_url = base_url

    def get_btc_price_usd(self) -> float:
        """Obtiene el precio spot actual de BTC/USDT en USD.

        Raises:
            CryptoApiError: Si ocurre un problema de red, HTTP o formateo de datos.
        """
        url = f"{self.base_url}/ticker/price?symbol=BTCUSDT"
        try:
            response = requests.get(url, timeout=5)
            response.raise_for_status()
            data = response.json()
            return float(data["price"])
        except (requests.RequestException, KeyError, ValueError) as err:
            raise CryptoApiError(
                f"Error al obtener el precio de Bitcoin desde la API: {err}"
            ) from err
```


3. Comportamiento

1. CryptoApiError(Exception): Abstrae los errores técnicos
Si la red cae o la API cambia la estructura JSON
la capa de negocio recibirá un CryptoApiError estándar en lugar de excepciones de requests

2. timeout=5:
Evita que la aplicación se quede colgada indefinidamente si hay problemas de latencia o conexión

3. response.raise_for_status():
Lanza automáticamente una excepción HTTP para códigos de respuesta 4xx o 5xx.

4. float(data["price"]): Convierte el String recibido de la API ("65432.10") a un tipo numérico explícito float
apto para cálculos posterior en la capa de dominio


4. Unit test: tests/test_crypto_api.py
Garantizar que los tests sean rápidos y confiables, mockeamos las llamadas HTTP
Nunca llamamos a internet durante un test unitario.

tests/test_crypto_api.py:

```
from unittest.mock import Mock, patch

import pytest
import requests

from infrastructure.crypto_api import CryptoApiClient, CryptoApiError


@patch("infrastructure.crypto_api.requests.get")
def test_get_btc_price_usd_success(mock_get: Mock) -> None:
    """Verifica la extracción correcta del precio ante una respuesta exitosa."""
    # Simulación de respuesta exitosa de Binance
    mock_response = Mock()
    mock_response.raise_for_status.return_value = None
    mock_response.json.return_value = {"symbol": "BTCUSDT", "price": "67890.50"}
    mock_get.return_value = mock_response

    client = CryptoApiClient()
    price = client.get_btc_price_usd()

    assert price == 67890.50
    mock_get.assert_called_once_with(
        "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT", timeout=5
    )


@patch("infrastructure.crypto_api.requests.get")
def test_get_btc_price_usd_network_failure(mock_get: Mock) -> None:
    """Verifica que un fallo de red se traduzca a CryptoApiError."""
    mock_get.side_effect = requests.RequestException("Error de conexión")

    client = CryptoApiClient()

    with pytest.raises(CryptoApiError) as exc_info:
        client.get_btc_price_usd()

    assert "Error al obtener el precio de Bitcoin" in str(exc_info.value)
```


5. Verificación

```
# 1. Verificar tipado estático
uv run mypy .

# 2. Ejecutar las pruebas unitarias
uv run pytest
```
