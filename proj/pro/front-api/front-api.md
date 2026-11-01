# Open Meteo - React


# Arq

```
[ Capa de Presentación ]  --> Componentes UI (shadcn / Tailwind)
         │
[ Capa de Aplicación ]    --> Custom Hooks (Estado, Debounce, Cancelación)
         │
[ Capa de Dominio ]       --> Mapeadores y Normalización de Datos
         │
[ Capa de Infraestructura]--> Cliente HTTP / Fetch (AbortController, URLs)
```


1. Infraestructura (HTTP Client)
Comunicación pura con la red.
Módulos encargados de construir las URLs con sus parámetros de consulta (query params)
para los endpoints de Geocoding y Forecast de Open-Meteo.

Clave de asincronía: Acepta un objeto AbortSignal emitido por la capa superior para cortar peticiones en vuelo a nivel de sockets del navegador

2. Dominio (Mapeadores / DTOs)
Aislar la aplicación del formato externo de la API.
Open-Meteo devuelve arreglos paralelos para las series temporales `(time: [...], temperature_2m: [...])`.
El mapeador transforma esa estructura rígida en objetos de dominio limpios y fáciles de iterar en React
(ej. un arreglo de objetos donde cada elemento agrupa su hora, temperatura e ícono).

Traducción WMO: Traduce los códigos numéricos de clima de la API a metadatos de dominio
(título de condición, ícono de Lucide y temática de color).

3. Capa de Aplicación (Custom Hooks & Estado)

Orquestar el flujo de datos y la Reactividad
Custodia las variables de estado UI (status, data, error).

Lógica asíncrona:
Implementa Debounce en la búsqueda por texto para no saturar la API mientras el usuario escribe
Instancia y aborta el AbortController previo ante una nueva búsqueda o cuando el componente se desmonta.
Previene Race Conditions: Si una petición vieja resuelve después de una petición nueva, descarta el resultado viejo manteniendo la integridad de la UI.

4. Capa de Presentación (UI con shadcn/ui)

Renderizar la interfaz visual

Componentes "tontos" o declarativos.
No ejecutan fetch ni transforman datos
Reciben el estado procesado por los hooks y lo renderizan usando las primitivas de shadcn/ui (Card, Input, Skeleton, Badge, Tabs).


Ej: 1. Escenario Búsqueda (User typing):

```
Usuario escribe "Lon..."
-> Debounce espera un margen de inactividad (ej. 300ms)
-> Se cancela la búsqueda previa si existía con AbortController
-> Se activa estado Loading
-> Llegan resultados
-> Dominio mapea los DTOs
-> Hook actualiza el estado a Success.
```

Ej: 2. Selección de Ciudad:

```
Usuario selecciona "Londres" de la lista
-> Hook dispara la petición de pronóstico pasando latitud/longitud
-> UI muestra Skeletons en la tarjeta actual y pronósticos
-> Transición suave al clima de la nueva ciudad
```


    
```
src/
├── infrastructure/         # Transporte HTTP y consumo directo de APIs
│   ├── api/                # Clientes fetch para geocoding y weather
│   └── http/               # Envoltorio base httpClient
├── domain/                 # Modelos, DTOs y Mapeadores de datos
│   ├── dtos/               # Contratos crudos de la API
│   ├── models/             # Tipos limpios para la aplicación React
│   └── mappers/            # Traductores de DTO a Modelo (y WMO codes)
├── application/            # Estado reactivo y control asíncrono
│   ├── hooks/              # useWeather, useLocationSearch, useDebounce
│   └── context/            # Contexto global de unidades (°C / °F)
└── presentation/           # Capa de UI (React + Tailwind + shadcn)
    ├── components/         # SearchBar, CurrentWeatherCard, Forecasts
    ├── ui/                 # Componentes autogenerados por shadcn/ui
    └── layout/             # Layout principal del dashboard
```


1. Capa de Infraestructura (Infraestructura & HTTP)

Módulos enfocados exclusivamente en el transporte de datos a través de la red y el consumo técnico de las APIs externas.

Cliente HTTP Base (httpClient): Envoltorio sobre la API nativa fetch
Su objetivo es centralizar la construcción de URLs con parámetros de búsqueda
adjuntar configuraciones por defecto
procesar la respuesta JSON y normalizar los errores HTTP (estados 4xx/5xx) o de red
Recibe y vincula la señal de cancelación (AbortSignal).

Cliente de Geolocalización (geocodingApi): Servicio de bajo nivel dedicado a interactuar con los servidores de Geocoding de Open-Meteo
Su único propósito es construir la consulta técnica por nombre de ciudad y retornar la respuesta sin modificar

Cliente de Meteorología (weatherApi): Servicio de bajo nivel dedicado al endpoint de pronóstico de Open-Meteo
Se encarga de solicitar las coordenadas numéricas (latitud y longitud)
zonas horarias y el listado de variables meteorológicas requeridas (temperatura, humedad, viento, códigos WMO).


2. Capa de Dominio (Modelos & Mapeadores)

Contratos de tipos e hiper-especializaciones encargadas de limpiar
estructurar y desacoplar los datos externos del modelo que necesita nuestra interfaz

Definición de DTOs (api.dtos): Interfaces de TypeScript que describen exactamente la estructura cruda y rígida enviada por la API de Open-Meteo
(como sus arreglos de series temporales paralelas time[], temperature_2m[]).

Modelos de Dominio (location.types y weather.types): Interfaces de TypeScript que definen la estructura de datos ideal para nuestra aplicación React
(ej. un objeto de clima actual limpio, un arreglo de objetos por hora donde cada elemento agrupa su tiempo, temperatura e ícono).

Diccionario de Códigos WMO (wmoMapper): Mapeador que recibe el código numérico de clima de la API (ej. 0, 61, 95) y lo traduce a una entidad de dominio legible que incluye la descripción textual ("Lluvia moderada")
el nombre del ícono correspondiente de Lucide y colores/estilos sugeridos

Mapeador de Clima (weatherMapper): Mapeador principal que toma la respuesta DTO cruda de la API (con arreglos separados)
y la transforma/ensambla en los objetos de dominio limpios para el clima actual, el pronóstico por horas y el pronóstico a 7 días.

Mapeador de Ubicaciones (locationMapper): Mapeador que limpia la lista cruda de sugerencias de ciudades
asigna valores por defecto si faltan regiones o países y devuelve entidades de ubicación simplificadas.


3. Capa de Aplicación (Custom Hooks & Estado)

Módulos React encargados de la reactividad, el control de flujo asíncrono
la cancelación de peticiones y el manejo de los estados de interfaz.

Hook de Debounce (useDebounce): Hook utilitario que retarda la actualización de un valor (el texto del buscador) durante un tiempo determinado (ej. 300ms)
para evitar llamadas innecesarias a la red por cada tecla presionada

Hook de Búsqueda de Ubicaciones (useLocationSearch): Gestor de estado para el buscador de ciudades. Mantiene el texto de entrada
ejecuta la consulta usando el valor con debounce, instancia y aborta un AbortController
si el usuario sigue escribiendo mientras hay una petición en curso, y expone los resultados o errores de búsqueda.

Hook Principal de Clima (useWeather): Corazón de la lógica de la aplicación
Almacena la ciudad seleccionada actualmente, orquesta la llamada al servicio HTTP pasando la señal de cancelación
envía los DTOs a los mapeadores de dominio y expone hacia la UI los datos procesados junto con las banderas de estado
(isIdle, isLoading, isSuccess, isError) y la función para reintentar.

Gestor de Unidades (useUnit o UnitContext): Estado global simple que administra la unidad de medida activa (Métrico u Imperial)
proporciona la función para alternar entre ellas, notificando a las capas de presentación para que conviertan o muestren los símbolos correspondientes


4. Capa de Presentación (Componentes de UI)

Componentes puramente declarativos (construidos con Tailwind CSS y primitivas de shadcn/ui) que no realizan llamadas HTTP ni transformaciones complejas de datos
únicamente reaccionan a las propiedades enviadas por los hooks.

Buscador Autocompletado (SearchBar): Componente de entrada con menú desplegable (usando Input y Popover/Command de shadcn).
Muestra el estado del texto, la lista de sugerencias recibidas del hook y reacciona al clic para seleccionar una ciudad

Tarjeta de Clima Actual (CurrentWeatherCard): Tarjeta principal (usando Card y Badge de shadcn) que renderiza la temperatura del momento
la ciudad activa, la condición climática traducida y las métricas secundarias (viento, humedad, sensación térmica).




# Bottom UP

Enfoque de abajo hacia arriba
primero lo que no tiene dependencias (modelos y contratos)
avanzamos hacia las capas que consumen esa lógica (servicios, hooks y componentes de UI)


1. Capa de Dominio (Contratos, Tipos y Traductores)

Sin dependencias
Define la forma de los datos crudos y los datos limpios.

src/domain/dtos/geocoding.dto.ts — Contrato de respuesta cruda del servidor de ciudades.
src/domain/dtos/weather.dto.ts — Contrato de respuesta cruda del servidor de clima.
src/domain/models/location.model.ts — Modelo limpio de ciudad para React.
src/domain/models/weather.model.ts — Modelo limpio del clima (actual, por hora, 7 días).
src/domain/models/unit.model.ts — Tipos para unidades (°C / °F).
src/domain/mappers/locationMapper.ts — Función de traducción DTO -> Modelo de Ciudad.
src/domain/mappers/wmoMapper.ts — Traductor de códigos de clima WMO a texto e ícono.
src/domain/mappers/weatherMapper.ts — Función de traducción DTO -> Modelo de Clima


2. Capa de Infraestructura (Cliente HTTP y Endpoints)

Depende de los DTOs para tipar las respuestas de red

src/infrastructure/http/httpClient.ts — Wrapper genérico sobre fetch con soporte para AbortSignal.
src/infrastructure/api/geocodingApi.ts — Servicio de consumo para la API de Geocoding.
src/infrastructure/api/weatherApi.ts — Servicio de consumo para la API de Pronóstico


3. Capa de Aplicación (Estado, Contexto y Hooks)

Depende de Infraestructura y Mapeadores de Dominio.

src/application/context/UnitContext.tsx — Contexto global para el cambio de unidades (°C/°F).
src/application/hooks/useDebounce.ts — Utility hook para el retardo en la búsqueda.
src/application/hooks/useLocationSearch.ts — Custom hook para búsqueda, cancelación y debounce.
src/application/hooks/useWeather.ts — Custom hook para la petición de clima, estados (loading, error, success) y reintento.


4. Capa de Presentación (Componentes de UI y Layout)

Depende de los Hooks, Contexto y Modelos de Dominio.

src/presentation/components/UnitToggle.tsx — Botón selector de °C y °F.
src/presentation/components/ErrorMessage.tsx — UI de error con botón de reintento.
src/presentation/components/WeatherSkeletons.tsx — Estados de carga animados mientras se consulta la API.
src/presentation/components/SearchBar.tsx — Input con debounce y dropdown de ciudades.
src/presentation/components/CurrentWeatherCard.tsx — Tarjeta con la métrica del clima actual.
src/presentation/components/HourlyForecast.tsx — Visor con scroll horizontal de las próximas 24h.
src/presentation/components/DailyForecast.tsx — Lista del pronóstico de 7 días.
src/presentation/layout/Header.tsx — Barra superior con título y selector de unidades.
src/presentation/layout/WeatherLayout.tsx — Contenedor principal y grilla responsiva.
src/App.tsx — Integración final con el UnitProvider y el layout.





# Testing

Inside-Out Testing: Testing de Adentro hacia Afuera
No todo tiene sentido testear
Por ej: para le proyecto, el mayor retorno de inversión (ROI) en Unit Tests se concentra en la lógica pura y el control de asincronía

```
[ UI / Componentes ]  --> Component Testing (Baja prioridad unitaria)
         ▲
[ Custom Hooks ]      --> Unit/Integration Test (Alta prioridad - Asincronía)
         ▲
[ HTTP / APIs ]       --> Unit Test (Prioridad media - Mocks de fetch)
         ▲
[ Mappers / Domain ]  --> Pure Unit Test (Máxima prioridad - Lógica pura)
```


1. Prioridad Máxima: Lógica Pura y Mapeadores (Dominio)

Herramientas: Vitest / Jest.Por qué: Son funciones puras (Entrada -> Salida).
No requieren DOM, no requieren mocks ni dependencias de red.
Son los tests más rápidos, estables y fáciles de mantener.

wmoMapper.ts:
Dado un código numérico WMO (ej. 0, 61, 95)
verifica que devuelva la descripción exacta en español, el ícono correcto de Lucide y los colores asignados
Revisa el comportamiento ante un código desconocido (fallback).

weatherMapper.ts:
Revisa la transformación de la respuesta cruda de Open-Meteo (arreglos paralelos time[], temperature_2m[]) a objetos estructurados
Valida que el agrupamiento por horas y la extracción de máximas/mínimas de 7 días sean matemáticamente precisos

locationMapper.ts:
Valida la limpieza de la lista de ciudades devuelta por la API y la asignación de valores por defecto cuando faltan campos opcionales (como admin1 o country).


2. Prioridad Alta: Estado y Asincronía (Hooks de Aplicación)

Herramientas: Vitest + @testing-library/react (renderHook, act).

Por qué: Aquí vive la complejidad que querías ejercitar.
Validar estados y cancelaciones sin renderizar la interfaz completa asegura que la lógica de aplicación sea sólida 

useDebounce.ts:
Verifica con temporizadores simulados (fake timers) que el valor no cambie inmediatamente ante la escritura continua
sino solo transcurrido el tiempo configurado (ej. 300ms).

useLocationSearch.ts:
Comprueba la transición de estados (isSearching, results, error).
Valida que al escribir un nuevo término mientras hay una petición en curso
se invoque el .abort() del AbortController anterior.

useWeather.ts:
Simula escenarios de éxito y fallo de red
Valida el paso directo de estados (isIdle -> isLoading -> isSuccess / isError)
comprueba que la función de reintento (retry) vuelva a disparar la petición


3. Prioridad Media: Cliente HTTP y Servicios (Infraestructura)

Herramientas: Vitest + Mocks de fetch o MSW (Mock Service Worker).

Asegura que los parámetros de consulta URL se formateen bien
que las respuestas no OK (status 4xx o 5xx) lancen errores controlados.

httpClient.ts:
Valida la construcción correcta de la URL con query params, la inclusión del AbortSignal
el parseo automático a JSON y la captura de fallos de red.

weatherApi.ts / geocodingApi.ts:
Verifica que envíen exactamente las coordenadas, variables meteorológicas y la zona horaria que Open-Meteo requiere


4. Prioridad Baja para Unit Tests: Componentes de UI (Presentación)

Herramientas: React Testing Library.

Por qué: Testear unitariamente un <CurrentWeatherCard/> o los <WeatherSkeletons/> suele ser frágil 
Estos componentes se validan mejor mediante Integration Tests (comprobar que la interacción en el SearchBar actualice las tarjetas de la pantalla)
o pruebas de renderizado condicional mínimo.



# Peticiones

Estructura de datos basada en columnas (Series Temporales):
A diferencia de la mayoría de REST APIs que devuelven arreglos de objetos
`([{ hora: "12:00", temp: 20 }, ...]),`

Open-Meteo devuelve objetos con arreglos paralelos sincronizados por índice:

```
{
  "time": ["2026-10-01T00:00", "2026-10-01T01:00"],
  "temperature_2m": [18.5, 17.2]
}
```

Implicación en React: La UI no debería procesar este formato directamente
Obliga a tener una capa de dominio/mapeador que interpola estos arreglos por posición de índice antes de pasarlos a los componentes React


Flujo en 2 Pasos

Geocoding -> Forecast
Open-Meteo no permite buscar directamente por el nombre de la ciudad en la API de clima

Se requiere:
Consultar la Geocoding API (geocoding-api.open-meteo.com) para traducir un texto ciudad a coordenadas latitud, longitud
Consultar la Forecast API (api.open-meteo.com) pasando esas coordenadas.


Asincronía con Fetch

Doble Ejecución en Strict Mode (React 18/19):
En entorno de desarrollo, React monta, desmonta y vuelve a montar los componentes de forma intencional para detectar efectos secundarios impuros

problema: Sin un mecanismo de limpieza (cleanup function)
cada búsqueda o carga de componente disparará dos peticiones HTTP a Open-Meteo simultáneamente

solución: Usar AbortController en la función de retorno de useEffect.


Carreras de Peticiones (Race Conditions):
Ocurre cuando el usuario busca "Madrid", y antes de que responda la API, borra y busca "Londres".

problema: Si la respuesta de "Madrid" tarda más en llegar que la de "Londres" por latencia de red
la pantalla podría mostrar finalmente los datos de Madrid aunque el usuario tenga seleccionado Londres.

solución: Abortar la petición previa en vuelo tan pronto como cambie el parámetro de búsqueda


Sincronización de Estados Incongruentes (Boolean Hell):
Utilizar múltiples estados independientes como
```
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)
```
puede provocar estados imposibles (ej. loading: true y error: true activos al mismo tiempo).


solución: Modelar el estado asíncrono como una máquina de estados finita con un tipo discriminado:
status: 'idle' | 'loading' | 'success' | 'error'.


```
[ Entrada del Usuario ] 
        │ (Debounce 300ms)
        ▼
[ AbortController ] ──(Cancela la petición en vuelo si el usuario vuelve a escribir)
        │
        ▼
[ Geocoding API ] ──► Recibe Coordenadas (lat, lon)
        │
        ▼
[ Weather API ] ──► Recibe JSON Crudo (Arreglos paralelos + Códigos WMO)
        │
        ▼
[ Weather Mapper ] ──► Transforma a Objetos Limpios e Íconos
        │
        ▼
[ Estado React ] ──► (status: 'success', data: WeatherModel) ──► UI Render
```





# 1.

### `src/domain/dtos/geocoding.dto.ts`

Este archivo define la estructura exacta del JSON crudo que devuelve la API de Geocoding de Open-Meteo (`[geocoding-api.open-meteo.com/v1/search](https://geocoding-api.open-meteo.com/v1/search)`).

```typescript
/**
 * Representa una ubicación individual devuelta por la API de Geocoding.
 * Varios campos son opcionales porque Open-Meteo no siempre los provee para todos los lugares.
 */
export interface GeocodingLocationDTO {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation?: number;
  feature_code?: string;
  country_code?: string;
  admin1_id?: number;
  admin2_id?: number;
  admin3_id?: number;
  admin4_id?: number;
  timezone?: string;
  population?: number;
  postcodes?: string[];
  country_id?: number;
  country?: string;
  admin1?: string; // Región / Provincia / Estado
  admin2?: string; // Departamento / Municipio
  admin3?: string;
  admin4?: string;
}

/**
 * Respuesta raíz de la API de Geocoding.
 * 'results' es opcional porque si la búsqueda no encuentra coincidencias, el campo no viene en el JSON.
 */
export interface GeocodingResponseDTO {
  results?: GeocodingLocationDTO[];
  generationtime_ms: number;
}

```

---

### Detalles clave a considerar:

* **`admin1`**: Representa la provincia o estado (ej. "Buenos Aires", "Cataluña"). Lo usaremos más adelante en el mapeador para formatear la ciudad como `"Nombre, Provincia, País"`.
* **`results?`**: Al ser un campo opcional, obliga a nuestra capa de dominio a manejar búsquedas sin resultados de forma segura (previniendo errores de tipo `Cannot read properties of undefined`).



## Objetivo

Definir el contrato de datos (Data Transfer Object / DTO) para tipar la respuesta en bruto (raw JSON) que devuelve la API externa de Geocoding de Open-Meteo
Tipado (Type Safety): Evita el uso de any al consumir la API HTTP. Permite que TypeScript valide los datos recibidos y ofrezca autocompletado exacto de las propiedades que expone Open-Meteo

Desacoplamiento de la Capa Externa (Mapeo): Sirve como la estructura de entrada para el mapeador (locationMapper.ts).
permite traducir los nombres de propiedades en snake_case originales de la API (como admin1 o country_code) hacia un modelo de dominio limpio (LocationModel) con nombres estandarizados en camelCase (region, countryCode).



## Endpoint

Provienen especificación del endpoint de la API de Geocoding de Open-Meteo ([https://geocoding-api.open-meteo.com/v1/search](https://geocoding-api.open-meteo.com/v1/search)).

Cuando la aplicación realiza una petición HTTP GET para buscar una ciudad, los servidores de Open-Meteo retornan un objeto JSON cuyo cuerpo (payload) incluye exactamente esas claves estructuradas en snake_case:

```
{
  "results": [
    {
      "id": 3435910,
      "name": "Buenos Aires",
      "latitude": -34.60372,
      "longitude": -58.38159,
      "country_code": "AR",
      "country": "Argentina",
      "admin1_id": 3433955,
      "admin1": "Buenos Aires F.D.",
      "admin2_id": 11628172,
      "admin2": "Comuna 1"
    }
  ],
  "generationtime_ms": 0.421
}
```


#### DTO no define las reglas de tu interfaz de usuario ni de tu negocio
##### servir como contrato espejo del formato JSON crudo que envía el proveedor externo

Open-Meteo expone esos nombres de propiedades en su API
al declararlos 1:1 en la interfaz GeocodingLocationDTO
garantizas que TypeScript pueda tipar y validar con total precisión la respuesta de la red al ejecutar httpGet<GeocodingResponseDTO>(...).


#### Proveedor externo

Open-Meteo (a través de sus servicios geocoding-api.open-meteo.com y api.open-meteo.com).
-party service o external vendor
cualquier sistema, servidor o API fuera del control de tu aplicación que te suministra datos o servicios.


No tienes control sobre su código ni su estructura:
Open-Meteo decide cómo nombrar sus campos (admin1_id, generationtime_ms, weather_code, etc.) y qué formato devolver (JSON con claves en snake_case).

Protección contra cambios (Desacoplamiento):
Si el día de mañana Open-Meteo cambia el nombre de un campo, o decides reemplazar Open-Meteo por otro proveedor (como OpenWeatherMap o WeatherAPI):

Infraestructura.

Tu interfaz de usuario (React) y la lógica de negocio (Dominio) no sufren ningún cambio, porque nunca dependieron directamente de la estructura del proveedor externo, sino de tu propio LocationModel.



# 2.


### `src/domain/dtos/weather.dto.ts`

Este archivo modela la respuesta JSON cruda del endpoint de pronóstico de Open-Meteo (`[api.open-meteo.com/v1/forecast](https://api.open-meteo.com/v1/forecast)`). Refleja la estructura de series temporales (arreglos paralelos) que devuelve la API.

```typescript
/**
 * Unidades asociadas a los valores actuales.
 */
export interface CurrentUnitsDTO {
  time: string;
  interval: string;
  temperature_2m: string;
  relative_humidity_2m: string;
  apparent_temperature: string;
  is_day: string;
  weather_code: string;
  wind_speed_10m: string;
}

/**
 * Métrica puntual del clima en el instante de la consulta.
 */
export interface CurrentWeatherDTO {
  time: string;
  interval: number;
  temperature_2m: number;
  relative_humidity_2m: number;
  apparent_temperature: number;
  is_day: number; // 1 = Día, 0 = Noche
  weather_code: number; // Código WMO
  wind_speed_10m: number;
}

/**
 * Series temporales por hora (arreglos paralelos ordenados por índice).
 */
export interface HourlyWeatherDTO {
  time: string[];
  temperature_2m: number[];
  relative_humidity_2m: number[];
  apparent_temperature: number[];
  precipitation_probability: number[];
  weather_code: number[];
  wind_speed_10m: number[];
}

/**
 * Series temporales por día para el pronóstico a 7 días.
 */
export interface DailyWeatherDTO {
  time: string[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  precipitation_probability_max?: number[];
  precipitation_sum?: number[];
}

/**
 * Respuesta raíz del endpoint de pronóstico de Open-Meteo.
 */
export interface WeatherResponseDTO {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units?: CurrentUnitsDTO;
  current?: CurrentWeatherDTO;
  hourly?: HourlyWeatherDTO;
  daily?: DailyWeatherDTO;
}

```

---

### Puntos clave a tener en cuenta:

* **Arreglos paralelos en `hourly` y `daily**`: Notarás que `time`, `temperature_2m`, y `weather_code` son arreglos separados de igual longitud. La posición `[i]` en cada uno corresponde al mismo momento en el tiempo.
* **`is_day`**: Open-Meteo devuelve un valor entero (`1` o `0`). En la capa de dominio lo convertiremos a un booleano (`boolean`) para facilitar condicionales en React.


## Objetivo


WeatherResponseDTO
Objeto raíz de la respuesta
Contiene la metadata geográfica (latitud, longitud, elevación, zona horaria)
y agrupa los bloques opcionales de clima actual, horario y diario.

CurrentWeatherDTO
Representa la medición puntual del clima en el momento de la consulta
(temperatura, humedad, velocidad del viento, código WMO, etc.).

CurrentUnitsDTO
Modela las unidades de medida correspondientes a los valores del clima actual (por ejemplo: "°C", "%", "km/h").

HourlyWeatherDTO
Define las series de tiempo por hora mediante arreglos paralelos
(donde el índice i corresponde al mismo instante de tiempo en cada propiedad).

DailyWeatherDTO
Modela el pronóstico diario (generalmente a 7 días) con valores agregados como temperaturas máximas/mínimas y probabilidad de precipitación.


### Servicios

Estas interfaces se utilizan principalmente en la capa de servicios que realiza la petición HTTP:

```
import { WeatherResponseDTO } from './weather.dto';

async function fetchWeather(lat: number, lon: number): Promise<WeatherResponseDTO> {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min`;
  
  const response = await fetch(url);
  const data: WeatherResponseDTO = await response.json();
  
  return data;
}
```



## Requisito de la API

La parte de la API que determina la estructura de este DTO es el endpoint de Pronóstico (Forecast API) de Open-Meteo:
[https://api.open-meteo.com/v1/forecast](https://api.open-meteo.com/v1/forecast)
la respuesta JSON de Open-Meteo se adapta exactamente a los parámetros que le enviamos en la URL.


## Ej:

### 1. Parámetro que le enviamos a Open-Meteo
current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m

### 2. Objeto JSON que devuelve Open-Meteo
"current": { ... } y "current_units": { ... }

### 3. Interface en weather.dto.ts
CurrentWeatherDTO y CurrentUnitsDTO


### De la URL al DTO

Cuando la aplicación ejecuta la petición HTTP:

`GET https://api.open-meteo.com/v1/forecast?latitude=-34.60&longitude=-58.38&current=temperature_2m,is_day&hourly=temperature_2m`

Responde el json exacto:

```
{
  "latitude": -34.60,
  "longitude": -58.38,
  "generationtime_ms": 0.12,
  "timezone": "America/Argentina/Buenos_Aires",
  "current_units": {
    "temperature_2m": "°C",
    "is_day": ""
  },
  "current": {
    "temperature_2m": 22.5,
    "is_day": 1
  },
  "hourly": {
    "time": ["2026-10-05T00:00", "2026-10-05T01:00"],
    "temperature_2m": [21.0, 20.2]
  }
}
```


### Flujo desde en front a la api

1. Interacción inicial (Capa de Presentación)
El usuario escribe un texto en el buscador (ej. "Madrid") en el componente SearchBar.tsx.

2. Captura y debounce (Capa de Aplicación)
Componente actualiza el estado interno administrado por el hook useLocationSearch.
El hook utiliza useDebounce para pausar la ejecución unos milisegundos hasta que el usuario termine de tipear
evitando saturar la red con una petición HTTP por cada letra ingresada.

3. Solicitud al repositorio (Aplicación -> Dominio -> Infraestructura)
Cuando la pausa del debounce finaliza
useLocationSearch llama a la abstracción de negocio weatherRepository.searchLocations("Madrid").

La implementación concreta (weatherRepositoryImpl) recibe la orden y delega la ejecución al módulo de API openMeteoApi.searchLocations.

4. Petición HTTP saliente (Capa de Infraestructura)
openMeteoApi arma la URL codificando los parámetros requeridos (name=Madrid&count=10&language=es).

Llama al cliente HTTP nativo httpGet<GeocodingResponseDTO>,
el cual invoca un fetch nativo del navegador enviando la solicitud a los servidores de Open-Meteo
(geocoding-api.open-meteo.com).

5. Procesamiento del proveedor externo (Servidor Open-Meteo) 
Open-Meteo busca la coincidencia en su base de datos geográfica
retorna un estado HTTP 200 OK con un cuerpo JSON en bruto (snake_case) correspondiente a la estructura del GeocodingResponseDTO

6. Desacoplamiento y mapeo a Dominio (Capa de Infraestructura)
El JSON recibido entra en locationMapper.ts.
El mapeador extrae las propiedades externas (country_code, admin1, etc.), limpia valores nulos/indefinidos y los transforma en instancias del modelo del dominio (LocationModel)
con sintaxis estandarizada en camelCase (countryCode, region).

##### En este punto, cualquier rasgo específico de la API externa queda eliminado de la cadena de datos.

7. Renderizado de resultados de búsqueda (Aplicación $\rightarrow$ Presentación)
hook useLocationSearch recibe la lista purificada LocationModel[], cambia isLoading a false y actualiza las ubicaciones

SearchBar.tsx detecta el cambio de estado y despliega la lista desplegable con los nombres formateados de las ciudades encontradas

8. Selección de ciudad y solicitud del clima

El usuario hace clic en "Madrid, España".

App.tsx ejecuta setSelectedLocation(...) enviando la ubicación elegida al hook useWeather.

useWeather crea un AbortController (para poder cancelar la petición si el usuario cambia de ciudad de inmediato),
activa isLoading = true y solicita el pronóstico llamando a weatherRepository.getWeatherForecast(...).

9. Consulta del pronóstico y transformación compleja

openMeteoApi ejecuta una segunda petición HTTP, esta vez hacia [api.open-meteo.com/v1/forecast](https://api.open-meteo.com/v1/forecast), pasando latitud, longitud y el sistema de unidades actual (métrico o imperial).

Open-Meteo devuelve el JSON bruto (WeatherResponseDTO) con arreglos de series temporales.

El archivo weatherMapper.ts procesa esa respuesta:
Recorre los arreglos paralelos (temperature_2m, precipitation_probability, etc.) y los combina por índice en objetos legibles.
Invoca a wmoMapper.ts para traducir los códigos numéricos del estado del tiempo (ej. weather_code: 61) a descripciones textuales ("Lluvia ligera") y nombres de íconos compatibles con la interfaz.

Entrega un único objeto de dominio limpio de tipo WeatherModel.


10. Actualización final de la interfaz de usuario
useWeather recibe el WeatherModel, desactiva el estado de carga (isLoading = false) y guarda los datos en su estado weather.

React notifica a App.tsx, provocando la re-evaluación visual de la pantalla.
Los componentes CurrentWeatherCard, HourlyForecast y DailyForecast reciben sus respectivas porciones del modelo de dominio y pintan en pantalla la tarjeta principal, el carrusel de 24 horas y el pronóstico de 7 días.


`[ USUARIO ]`
        │
        │ 1. Interacción (Escribe "Madrid" o selecciona una ciudad)
        ▼
┌──────────────────────────────────────────────────────────────────┐
│ CAPA DE PRESENTACIÓN (UI)                                        │
│ SearchBar.tsx / App.tsx                                          │
└────────────────────────────────┬─────────────────────────────────┘
                                 │
                                 │ 2. Dispara evento / Debounce
                                 ▼
┌──────────────────────────────────────────────────────────────────┐
│ CAPA DE APLICACIÓN (Hooks / State)                               │
│ useLocationSearch.ts / useWeather.ts                             │
└────────────────────────────────┬─────────────────────────────────┘
                                 │
                                 │ 3. Consulta la abstracción del repositorio
                                 ▼
┌──────────────────────────────────────────────────────────────────┐
│ CAPA DE DOMINIO (Contratos y Modelos)                            │
│ WeatherRepository (Interfaz) / LocationModel / WeatherModel      │
└────────────────────────────────┬─────────────────────────────────┘
                                 │
                                 │ 4. Delega ejecución a la implementación
                                 ▼
┌──────────────────────────────────────────────────────────────────┐
│ CAPA DE INFRAESTRUCTURA (Red y Adaptadores)                      │
│ weatherRepositoryImpl.ts ──> openMeteoApi.ts ──> httpGet.ts      │
└────────────────────────────────┬─────────────────────────────────┘
                                 │
                                 │ 5. Petición HTTP GET (URL + Query Params)
                                 ▼
┌──────────────────────────────────────────────────────────────────┐
│ PROVEEDOR EXTERNO (Servicios Web)                                │
│ Open-Meteo API (geocoding / forecast endpoints)                  │
└────────────────────────────────┬─────────────────────────────────┘
                                 │
                                 │ 6. Respuesta HTTP 200 OK (JSON crudo en snake_case)
                                 ▼
┌──────────────────────────────────────────────────────────────────┐
│ CAPA DE INFRAESTRUCTURA (Validación y Mapeo)                     │
│ ├─ Encaja JSON en: GeocodingResponseDTO / WeatherResponseDTO     │
│ └─ Pasa por: locationMapper.ts / weatherMapper.ts + wmoMapper.ts │
└────────────────────────────────┬─────────────────────────────────┘
                                 │
                                 │ 7. Retorna modelos limpios en camelCase (LocationModel / WeatherModel)
                                 ▼
┌──────────────────────────────────────────────────────────────────┐
│ CAPA DE APLICACIÓN (Actualización de Estado)                     │
│ Reacciona en Hook ──> setWeather(data) / setIsLoading(false)     │
└────────────────────────────────┬─────────────────────────────────┘
                                 │
                                 │ 8. Inyecta props y dispara re-renderizado
                                 ▼
┌──────────────────────────────────────────────────────────────────┐
│ CAPA DE PRESENTACIÓN (Componentes de UI)                         │
│ CurrentWeatherCard / HourlyForecast / DailyForecast              │
└────────────────────────────────┬─────────────────────────────────┘
                                 │
                                 │ 9. Pintado visual de datos e íconos en pantalla
                                 ▼
   `[ PANTALLA DEL USUARIO ]`




    
# 3.



### `src/domain/models/location.model.ts`

Este archivo define la interfaz limpia y normalizada que utilizará la aplicación React para representar una ciudad o ubicación seleccionada.

```typescript
/**
 * Modelo de dominio para representar una ubicación limpia dentro de la aplicación.
 * Aísla a los componentes de la estructura opcional e inconstante del DTO de Geocoding.
 */
export interface LocationModel {
  id: number;
  name: string;
  country: string;
  region?: string;
  displayName: string; // Cadena preformateada lista para la UI (ej. "Bernal, Buenos Aires, Argentina")
  latitude: number;
  longitude: number;
}

```


### 

---

### Puntos clave:

* **`displayName`**: Es una propiedad calculada que generará el mapeador. Permite que la barra de búsqueda y los encabezados rendericen la ubicación en un solo string formateado sin duplicar lógica de concatenación en los componentes.
* **Separación de responsabilidades**: La UI no necesita saber qué eran `admin1` o `country_code` en el servidor; solo consume `name`, `region` y `country`.


representación canónica y limpia de una ubicación dentro del Dominio de la aplicación
estableciendo exactamente qué datos necesita nuestra interfaz de usuario y aislándola de la estructura del proveedor externo (Open-Meteo).


1. Simplificación del modelo (De 18 campos a 7)
Mientras que GeocodingLocationDTO contiene ~18 propiedades complejas y opcionales enviadas por Open-Meteo (admin1, admin2_id, feature_code, population, etc.),
LocationModel reduce la estructura únicamente a las 7 propiedades indispensables que le interesan a la aplicación

2. Campo listo para la UI (displayName)
Agrega la propiedad calculada displayName (ej. "Bernal, Buenos Aires, Argentina").
De esta forma, se evita duplicar lógica de formateo o concatenación de strings con condicionales dentro de los componentes de React
(SearchBar.tsx, CurrentWeatherCard.tsx).

3. Estandarización al lenguaje de TypeScript (camelCase)
Convierte los nombres de variables externos en snake_case (country_code, admin1)
al estándar idiomatico de JavaScript/TypeScript en camelCase (country, region).

4. Estabilidad ante cambios de la API
Si en el futuro se reemplaza el servicio de Geocoding de Open-Meteo por otro proveedor (como Mapbox, Google Places u OpenStreetMap)
la interfaz de React seguirá funcionando exactamente igual sin tocar una sola línea de código, ya que solo conoce y consume LocationModel.



## DTO vs Modelo: usos

Dto: espejo de la respuesta json de la api
Modelo: siplifica la respuesta


### Uso del dto: Ej GeocodingLocationDTO

El DTO se usa única y exclusivamente dentro de la Capa de Infraestructura
Nace al recibir los datos de la red y muere dentro del mapeador

1. Al hacer la petición HTTP (openMeteoApi.ts):
Para tipar la respuesta en bruto que devuelve el cliente HTTP (fetch).

`const response = await httpGet<GeocodingResponseDTO>(url);`

2. Como parámetro de entrada en el Mapeador (locationMapper.ts):
Para tomar cada objeto crudo enviarlo a transformar.


### Uso del modelo: Ej: LocationModel

se usa en todas las demás capas de la aplicación
(Dominio, Aplicación y Presentación).

1. Contratos e Implementaciones de Repositorios (weatherRepository.ts):

repositorio promete devolver modelos de dominio limpios, nunca DTOs.
`searchLocations(query: string): Promise<LocationModel[]>;`

2. Estados de los Custom Hooks (useLocationSearch.ts, useWeather.ts)
almacenar la ubicación seleccionada o los resultados de la búsqueda.
`const [selectedLocation, setSelectedLocation] = useState<LocationModel | null>(null);`

3. Props de los Componentes de React: CurrentWeatherCard.tsx, SearchBar.tsx
Para pintar los datos en pantalla sin preocuparte por cómo venían estructurados desde la API.

```
interface CurrentWeatherCardProps {
  location: LocationModel;
  current: CurrentWeatherModel;
}
```

```
[ Red / API ] ──(Envía JSON)──> [ DTO ] ──(locationMapper)──> [ LocationModel ] ──> [ React UI ]
                                └─────────────────────────┘
                                   Ocurre dentro de
                                    Infraestructura
```
                                    


# 4.


### `src/domain/models/weather.model.ts`

Este archivo define el modelo de datos limpio para el clima. Agrupa las métricas actuales y transforma los arreglos de series temporales de la API en colecciones de objetos fáciles de iterar en los componentes de React.

```typescript
/**
 * Metadatos traducidos de la condición meteorológica basada en el código WMO.
 */
export interface WeatherCondition {
  code: number;
  description: string; // Ejemplo: "Lluvia moderada"
  iconName: string;    // Nombre del ícono de Lucide (ej: "CloudRain")
}

/**
 * Modelo para las métricas del clima en el instante actual.
 */
export interface CurrentWeatherModel {
  temperature: number;
  apparentTemperature: number;
  humidity: number;
  windSpeed: number;
  isDay: boolean;
  condition: WeatherCondition;
  time: string;
}

/**
 * Modelo para un punto específico en el pronóstico por horas (próximas 24h).
 */
export interface HourlyForecastModel {
  time: string;                 // ISO string (ej. "2026-10-05T14:00")
  formattedTime: string;        // Hora formateada para la UI (ej. "14:00")
  temperature: number;
  precipitationProbability: number;
  condition: WeatherCondition;
}

/**
 * Modelo para un día en el pronóstico a 7 días.
 */
export interface DailyForecastModel {
  date: string;                 // ISO string del día (ej. "2026-10-05")
  dayName: string;              // Día traducido (ej. "Lunes")
  maxTemperature: number;
  minTemperature: number;
  precipitationProbability: number;
  condition: WeatherCondition;
}

/**
 * Modelo consolidado del clima que consumirá la capa de aplicación/UI.
 */
export interface WeatherModel {
  current: CurrentWeatherModel;
  hourly: HourlyForecastModel[];
  daily: DailyForecastModel[];
}

```

---

### Puntos clave:

* **Objetos ordenados vs. Arreglos paralelos**: `HourlyForecastModel` y `DailyForecastModel` encapsulan todas las propiedades pertenecientes a un mismo punto en el tiempo (`time`, `temperature`, `condition`, etc.), eliminando la necesidad de iterar múltiples arreglos por índice en la UI.
* **`WeatherCondition`**: Desacopla a la UI de los números crudos del estándar WMO. La vista solo lee `.description` o `.iconName`.




# 5.


### `src/domain/models/unit.model.ts`

Este archivo define los tipos para el sistema de unidades meteorológicas soportadas (Métrico e Imperial)
y las etiquetas que se mostrarán en la interfaz.

```typescript
/**
 * Sistemas de unidades soportados por la aplicación.
 */
export type UnitSystem = 'metric' | 'imperial';

/**
 * Unidades individuales de medida.
 */
export type TemperatureUnit = 'celsius' | 'fahrenheit';
export type WindSpeedUnit = 'kmh' | 'mph';

/**
 * Simbología e indicadores para renderizar en la UI.
 */
export interface UnitSymbols {
  temperature: '°C' | '°F';
  windSpeed: 'km/h' | 'mph';
}

/**
 * Mapeo de símbolos legibles según el sistema de unidades activo.
 */
export const UNIT_SYMBOLS: Record<UnitSystem, UnitSymbols> = {
  metric: {
    temperature: '°C',
    windSpeed: 'km/h',
  },
  imperial: {
    temperature: '°F',
    windSpeed: 'mph',
  },
};

```

---

### Puntos clave:

* **`UnitSystem`**: Define los modos globales que manejará el `UnitContext`.
* **`UNIT_SYMBOLS`**: Diccionario inmutable de constantes que le permite a cualquier componente de la UI obtener la etiqueta correcta (`°C`, `°F`, `km/h`, `mph`) inmediatamente sin reescribir lógica condicional.




# 6.


### `src/domain/mappers/locationMapper.ts`

Este archivo contiene funciones puras que toman la respuesta cruda de la API de Geocoding y la transforman en un arreglo de objetos `LocationModel` limpios y estructurados.

```typescript
import { GeocodingResponseDTO, GeocodingLocationDTO } from '@domain/dtos/geocoding.dto';
import { LocationModel } from '@domain/models/location.model';

/**
 * Transforma un objeto DTO de ubicación individual a un modelo de dominio limpio.
 */
export function mapLocationDtoToModel(dto: GeocodingLocationDTO): LocationModel {
  const country = dto.country ?? '';
  const region = dto.admin1;

  // Construye displayName filtrando valores no definidos (evita comas colgadas o dobles espacios)
  const displayNameParts = [dto.name, region, country].filter(Boolean);
  const displayName = displayNameParts.join(', ');

  return {
    id: dto.id,
    name: dto.name,
    country,
    region,
    displayName,
    latitude: dto.latitude,
    longitude: dto.longitude,
  };
}

/**
 * Mapea la respuesta completa de la API de Geocoding.
 * Maneja de forma segura las búsquedas sin coincidencias (cuando `results` viene `undefined`).
 */
export function mapGeocodingResponseToLocations(response: GeocodingResponseDTO): LocationModel[] {
  if (!response.results || response.results.length === 0) {
    return [];
  }

  return response.results.map(mapLocationDtoToModel);
}

```

---

### Puntos clave:

* **Manejo defensivo de opcionales**: Usa `.filter(Boolean)` para descartar valores como `undefined` o cadenas vacías antes de hacer `.join(', ')`, asegurando cadenas limpias como `"Bernal, Buenos Aires, Argentina"` en lugar de `"Bernal, , Argentina"`.
* **Protección contra respuestas vacías**: Si la API no encuentra ninguna coincidencia, `response.results` será `undefined`. La función lo intercepta y retorna un arreglo vacío `[]` de forma segura.



### Objetivo: entra dirty dto y sale modelo limpio

##### !!! actuar como la aduana o traductor de datos que transforma la respuesta cruda de la API externa (GeocodingResponseDTO)
##### en arreglos u objetos limpios del Modelo de Dominio (LocationModel).

1. Aislamiento de la API Externa (Traducción de DTO a Dominio)
##### Pasa las propiedades desde la nomenclatura externa en snake_case
y nombres de GeoNames (admin1, country_code)
##### hacia la nomenclatura interna de la aplicación (region, country).

2. Formateo inteligente de datos para la UI (displayName)
Construye dinámicamente la propiedad displayName mediante:

```
const displayNameParts = [dto.name, region, country].filter(Boolean);
```

##### truco .filter(Boolean) elimina automáticamente valores nulos, undefined o cadenas vacías.
Evita errores visuales comunes como comas duplicadas o espacios colgados
##### (ej. transforma lo que podría ser "Bernal, , Argentina" en un impecable "Bernal, Argentina").

3. Manejo defensivo de casos borde (Resiliencia)
En mapGeocodingResponseToLocations, valida explícitamente si response.results es undefined
o está vacío (comportamiento estándar de Open-Meteo cuando no halla coincidencias).

Devuelve de forma segura un arreglo vacío [],
evitando excepciones en tiempo de ejecución
(runtime crashes) al intentar hacer .map()
sobre algo indefinido.

4. Sanitización y valores por defecto
Asigna valores de respaldo (como dto.country ?? '') para asegurar que el modelo de dominio nunca contenga datos corruptos o inesperados.



### Usos en la app del mapper

se invoca exclusivamente dentro de la Capa de Infraestructura, específicamente en la implementación del repositorio de clima
(src/infrastructure/repositories/weatherRepositoryImpl.ts o en los métodos del servicio de API openMeteoApi.ts).

1. En la búsqueda de ubicaciones por texto (searchLocations)
Cuando el usuario escribe en la barra de búsqueda
la Infraestructura consulta la API de Geocoding
pasa la respuesta directamente por el mapper antes de devolverla a los hooks de React.

```
// En src/infrastructure/repositories/weatherRepositoryImpl.ts
import { mapGeocodingResponseToLocations } from '@domain/mappers/locationMapper';

export const weatherRepositoryImpl: WeatherRepository = {
  async searchLocations(query: string): Promise<LocationModel[]> {
    // 1. Petición HTTP que devuelve DTOs en bruto
    const rawDto = await openMeteoApi.searchLocations(query);

    // 2. USO DEL MAPPER: Convierte GeocodingResponseDTO -> LocationModel[]
    return mapGeocodingResponseToLocations(rawDto);
  },
  // ...
};
```

Encapsulamiento total:
Los componentes (SearchBar.tsx)
y los hooks (useLocationSearch.ts)
solo llaman a weatherRepository.searchLocations(query).
Nunca ven los DTOs ni necesitan saber que existe un mapper.

Garantía de contrato: El repositorio declara que su método retorna Promise<LocationModel[]>.
El mapper es la herramienta que le permite cumplir esa promesa convirtiendo los datos de la red.


2.




# 7.



### `src/domain/mappers/wmoMapper.ts`

Este archivo contiene la tabla de traducción de los códigos meteorológicos de la WMO (Organización Meteorológica Mundial) a descripciones legibles en español e identificadores de íconos compatibles con Lucide Icons.

```typescript
import { WeatherCondition } from '@domain/models/weather.model';

interface WmoMetadata {
  description: string;
  dayIcon: string;
  nightIcon: string;
}

/**
 * Diccionario de mapeo según el estándar numérico WMO de Open-Meteo.
 */
const WMO_CODE_MAP: Record<number, WmoMetadata> = {
  0: { description: 'Cielo despejado', dayIcon: 'Sun', nightIcon: 'Moon' },
  1: { description: 'Principalmente despejado', dayIcon: 'SunDim', nightIcon: 'Moon' },
  2: { description: 'Parcialmente nublado', dayIcon: 'CloudSun', nightIcon: 'CloudMoon' },
  3: { description: 'Nublado', dayIcon: 'Cloud', nightIcon: 'Cloud' },
  45: { description: 'Niebla', dayIcon: 'CloudFog', nightIcon: 'CloudFog' },
  48: { description: 'Niebla con escarcha', dayIcon: 'CloudFog', nightIcon: 'CloudFog' },
  51: { description: 'Llovizna ligera', dayIcon: 'CloudDrizzle', nightIcon: 'CloudDrizzle' },
  53: { description: 'Llovizna moderada', dayIcon: 'CloudDrizzle', nightIcon: 'CloudDrizzle' },
  55: { description: 'Llovizna densa', dayIcon: 'CloudDrizzle', nightIcon: 'CloudDrizzle' },
  56: { description: 'Llovizna helada ligera', dayIcon: 'CloudHail', nightIcon: 'CloudHail' },
  57: { description: 'Llovizna helada densa', dayIcon: 'CloudHail', nightIcon: 'CloudHail' },
  61: { description: 'Lluvia ligera', dayIcon: 'CloudRain', nightIcon: 'CloudRain' },
  63: { description: 'Lluvia moderada', dayIcon: 'CloudRain', nightIcon: 'CloudRain' },
  65: { description: 'Lluvia fuerte', dayIcon: 'CloudRainWind', nightIcon: 'CloudRainWind' },
  66: { description: 'Lluvia helada ligera', dayIcon: 'CloudHail', nightIcon: 'CloudHail' },
  67: { description: 'Lluvia helada fuerte', dayIcon: 'CloudHail', nightIcon: 'CloudHail' },
  71: { description: 'Nevada ligera', dayIcon: 'Snowflake', nightIcon: 'Snowflake' },
  73: { description: 'Nevada moderada', dayIcon: 'Snowflake', nightIcon: 'Snowflake' },
  75: { description: 'Nevada fuerte', dayIcon: 'Snowflake', nightIcon: 'Snowflake' },
  77: { description: 'Granizo fino', dayIcon: 'CloudHail', nightIcon: 'CloudHail' },
  80: { description: 'Chubascos ligeros', dayIcon: 'CloudSunRain', nightIcon: 'CloudMoonRain' },
  81: { description: 'Chubascos moderados', dayIcon: 'CloudRain', nightIcon: 'CloudRain' },
  82: { description: 'Chubascos violentos', dayIcon: 'CloudRainWind', nightIcon: 'CloudRainWind' },
  85: { description: 'Chubascos de nieve ligeros', dayIcon: 'Snowflake', nightIcon: 'Snowflake' },
  86: { description: 'Chubascos de nieve fuertes', dayIcon: 'Snowflake', nightIcon: 'Snowflake' },
  95: { description: 'Tormenta eléctrica', dayIcon: 'CloudLightning', nightIcon: 'CloudLightning' },
  96: { description: 'Tormenta con granizo leve', dayIcon: 'CloudLightning', nightIcon: 'CloudLightning' },
  99: { description: 'Tormenta con granizo fuerte', dayIcon: 'CloudLightning', nightIcon: 'CloudLightning' },
};

/**
 * Devuelve la condición meteorológica traducida con el ícono apropiado según sea de día o de noche.
 */
export function mapWmoCodeToCondition(code: number, isDay: boolean = true): WeatherCondition {
  const metadata = WMO_CODE_MAP[code] ?? {
    description: 'Condición desconocida',
    dayIcon: 'HelpCircle',
    nightIcon: 'HelpCircle',
  };

  return {
    code,
    description: metadata.description,
    iconName: isDay ? metadata.dayIcon : metadata.nightIcon,
  };
}

```

---

### Puntos clave:

* **Sincronización Día/Noche**: La función conmuta dinámicamente entre íconos de sol (`Sun`, `CloudSun`) e íconos de luna (`Moon`, `CloudMoon`) basándose en la bandera `isDay`.
* **Fallback seguro**: Si Open-Meteo retorna un código no contemplado, la función responde con un estado por defecto (`HelpCircle`) sin lanzar excepciones en tiempo de ejecución.



### Objetivo

#### weather.model.ts
define los modelos de datos que la interfaz de usuario entiende

WeatherCondition
estructura compartida por los tres niveles de pronóstico (current, hourly y daily).
Encapsula todo lo relacionado con la apariencia visual y descriptiva de un estado del tiempo:

code: El número WMO original (ej. 61).
description: El texto traducido y amigable para el usuario (ej. "Lluvia ligera").
iconName: El nombre exacto del ícono de la librería Lucide React que debe pintarse (ej. "CloudRain").

WeatherModel
Agrupa el estado actual (current)
el pronóstico por horas (hourly) y el pronóstico de 7 días (daily)
en un único objeto listo para renderizar.


#### wmoMapper.ts:
motor de traducción que convierte los códigos numéricos abstractos de la API
en la condición meteorológica visual que consume ese modelo.

##### Open-Meteo no envía cadenas como "Día soleado"
##### sino enteros definidos por la Organización Meteorológica Mundial (WMO Code standard, como 0, 3, 61 o 95).

cumple tres funciones indispensables:

1. Diccionario de Interpretación (WMO_CODE_MAP):
Asocia cada número WMO a su significado en español y a sus dos posibles representaciones gráficas (de día y de noche).

2. Lógica Día/Noche: La función mapWmoCodeToCondition(code, isDay)
evalúa la propiedad isDay
ejemplo, para el código 0 (despejado):

Si isDay = true -> asigna el ícono 'Sun'.
Si isDay = false -> asigna el ícono 'Moon'.

3. Manejo defensivo con Fallback
Si la API devuelve un código no mapeado o desconocido
se activa el operador ?? asignando la descripción "Condición desconocida"
y el ícono 'HelpCircle', evitando que la aplicación rompa o muestre un valor undefined.

```
[ JSON Open-Meteo ] ──> weather_code: 61, is_day: 1
                                │
                                ▼ (mapWmoCodeToCondition)
                      {
                        code: 61,
                        description: 'Lluvia ligera',
                        iconName: 'CloudRain'
                      }
                                │
                                ▼
                       Inserted into WeatherCondition 
                                │
                                ▼
            Used inside CurrentWeatherModel / HourlyForecastModel
```

los componentes de la interfaz de usuario (CurrentWeatherCard.tsx, WeatherIcon.tsx) reciben directamente un nombre de ícono e instruyen a Lucide qué SVG renderizar
sin tener que evaluar condicionales o números de API dentro de React.




# 8.

### `src/domain/mappers/weatherMapper.ts`

Este archivo contiene la lógica para transformar los datos crudos del clima (con arreglos paralelos de series temporales) en un objeto consolidado `WeatherModel`.

```typescript
import { WeatherResponseDTO } from '@domain/dtos/weather.dto';
import {
  WeatherModel,
  CurrentWeatherModel,
  HourlyForecastModel,
  DailyForecastModel,
} from '@domain/models/weather.model';
import { mapWmoCodeToCondition } from '@domain/mappers/wmoMapper';

/**
 * Convierte una fecha ISO (ej: "2026-10-05T14:00") a formato de hora legible (ej: "14:00").
 */
function formatHour(isoString: string): string {
  const date = new Date(isoString);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
}

/**
 * Convierte una fecha ISO (ej: "2026-10-05") al nombre del día en español (ej: "Lunes").
 */
function formatDayName(dateString: string): string {
  const date = new Date(`${dateString}T00:00:00`);
  const dayName = date.toLocaleDateString('es-ES', { weekday: 'long' });
  return dayName.charAt(0).toUpperCase() + dayName.slice(1);
}

/**
 * Mapea las métricas puntuales del clima actual.
 */
function mapCurrentWeather(dto: WeatherResponseDTO): CurrentWeatherModel {
  const current = dto.current;
  
  if (!current) {
    throw new Error('La respuesta de la API no contiene información del clima actual.');
  }

  const isDay = current.is_day === 1;

  return {
    temperature: Math.round(current.temperature_2m),
    apparentTemperature: Math.round(current.apparent_temperature),
    humidity: current.relative_humidity_2m,
    windSpeed: Math.round(current.wind_speed_10m),
    isDay,
    condition: mapWmoCodeToCondition(current.weather_code, isDay),
    time: current.time,
  };
}

/**
 * Transforma los arreglos paralelos de por hora en una lista de objetos HourlyForecastModel.
 * Limita el resultado a las próximas 24 horas a partir del momento actual.
 */
function mapHourlyForecast(dto: WeatherResponseDTO): HourlyForecastModel[] {
  const hourly = dto.hourly;

  if (!hourly || !hourly.time) {
    return [];
  }

  // Encontrar el índice de la hora actual para mostrar el pronóstico futuro
  const currentTime = dto.current?.time ?? new Date().toISOString();
  const currentHourPrefix = currentTime.slice(0, 13); // "YYYY-MM-DDTHH"
  
  let startIndex = hourly.time.findIndex((t) => t.startsWith(currentHourPrefix));
  if (startIndex === -1) startIndex = 0;

  const next24Hours = hourly.time.slice(startIndex, startIndex + 24);

  return next24Hours.map((time, offset) => {
    const index = startIndex + offset;
    const wmoCode = hourly.weather_code[index] ?? 0;

    return {
      time,
      formattedTime: formatHour(time),
      temperature: Math.round(hourly.temperature_2m[index] ?? 0),
      precipitationProbability: hourly.precipitation_probability[index] ?? 0,
      condition: mapWmoCodeToCondition(wmoCode, true),
    };
  });
}

/**
 * Transforma los arreglos paralelos de por día en una lista de objetos DailyForecastModel (7 días).
 */
function mapDailyForecast(dto: WeatherResponseDTO): DailyForecastModel[] {
  const daily = dto.daily;

  if (!daily || !daily.time) {
    return [];
  }

  return daily.time.map((date, index) => {
    const wmoCode = daily.weather_code[index] ?? 0;

    return {
      date,
      dayName: formatDayName(date),
      maxTemperature: Math.round(daily.temperature_2m_max[index] ?? 0),
      minTemperature: Math.round(daily.temperature_2m_min[index] ?? 0),
      precipitationProbability: daily.precipitation_probability_max?.[index] ?? 0,
      condition: mapWmoCodeToCondition(wmoCode, true),
    };
  });
}

/**
 * Mapeador principal que transforma la respuesta cruda DTO en el modelo consolidado de dominio.
 */
export function mapWeatherDtoToModel(dto: WeatherResponseDTO): WeatherModel {
  return {
    current: mapCurrentWeather(dto),
    hourly: mapHourlyForecast(dto),
    daily: mapDailyForecast(dto),
  };
}

```

---

### Puntos clave:

* **Sincronización por índice**: Interpola los arreglos paralelos de Open-Meteo (`hourly.temperature_2m[index]`, `hourly.weather_code[index]`, etc.) produciendo objetos limpios listos para iterar con `.map()` en React.
* **Procesamiento de horas futuras**: Identifica la hora actual y extrae un bloque exacto de 24 horas consecutivas mediante `.slice(startIndex, startIndex + 24)`.
* **Redondeo de métricas**: Aplica `Math.round()` en temperaturas y velocidades de viento para evitar decimales innecesarios en la interfaz gráfica.

---

¡Con esto completamos la **Fase 1: Capa de Dominio**! Ya tenemos todos nuestros DTOs, Modelos y Mapeadores listos.




# 9. 


### `src/infrastructure/http/httpClient.ts`

Este archivo implementa el wrapper genérico sobre la API nativa `fetch`.
Resuelve la ausencia de manejo automático de errores HTTP en `fetch` (ya que `fetch` no rechaza promesas en códigos 4xx/5xx)
y facilita el paso de parámetros de consulta (`query params`) y señales de cancelación (`AbortSignal`).

```typescript
/**
 * Excepción personalizada para errores de red HTTP (4xx, 5xx).
 */
export class HttpError extends Error {
  constructor(
    message: string,
    public status: number,
    public statusText: string
  ) {
    super(message);
    this.name = 'HttpError';
  }
}

/**
 * Opciones aceptadas por el cliente HTTP.
 */
export interface HttpOptions {
  params?: Record<string, string | number | boolean | undefined>;
  headers?: Record<string, string>;
  signal?: AbortSignal;
}

/**
 * Realiza una petición HTTP GET tipeada usando la API fetch nativa.
 * 
 * @template T Tipo de dato esperado en la respuesta.
 * @param url URL base o completa del endpoint.
 * @param options Parámetros de consulta, headers y AbortSignal opcionales.
 */
export async function httpGet<T>(url: string, options: HttpOptions = {}): Promise<T> {
  const { params, headers, signal } = options;

  // Construcción segura de la URL con Query Parameters
  const targetUrl = new URL(url);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        targetUrl.searchParams.append(key, String(value));
      }
    });
  }

  const response = await fetch(targetUrl.toString(), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    signal,
  });

  // fetch() NO rechaza promesas en respuestas HTTP 4xx o 5xx; debemos validarlo manualmente:
  if (!response.ok) {
    throw new HttpError(
      `Petición fallida [${response.status}]: ${response.statusText}`,
      response.status,
      response.statusText
    );
  }

  return response.json() as Promise<T>;
}

```

---

### Puntos clave de esta implementación:

1. **Construcción segura de Query Params**:
Utiliza la API de la plataforma `URL` y `URLSearchParams` para formatear de manera transparente los parámetros de consulta (ej. `?latitude=-34.7&longitude=-58.2&current=temperature_2m`), filtrando automáticamente valores `undefined` o `null`.
2. **Validación de `response.ok**`:
Lanza una instancia de `HttpError` cuando el servidor responde con códigos de error como `404 Not Found` o `500 Internal Server Error`, asegurando que la capa de aplicación pueda capturarlos mediante bloques `try / catch`.
3. **Soporte Nativo de Cancelación (`signal`)**:
Recibe el `AbortSignal` como parte de `options`, permitiendo abortar peticiones pendientes desde nuestros Custom Hooks de React cuando el usuario escribe rápido o cambia de pantalla.



### Objetivo

capa de abstracción ligera, reutilizable y con tipado estricto sobre la API nativa fetch del navegador
encargada de centralizar la comunicación HTTP saliente dentro de la Capa de Infraestructura.

#### Corrección del comportamiento nativo de fetch (HttpError):
Por defecto, la función fetch de JavaScript no rechaza la promesa ante respuestas con códigos de error HTTP
(como 404 Not Found o 500 Internal Server Error)
Este módulo evalúa !response.ok y lanza la excepción personalizada HttpError enriquecida
con el número de estado (status) y su descripción (statusText).

#### Construcción segura de parámetros de consulta (searchParams):
Utiliza la API nativa URL para serializar los parámetros de búsqueda (params).
Filtra automáticamente valores null o undefined
evitando concatenaciones manuales propensas a errores de sintaxis en las URLs

#### Soporte para cancelación de peticiones (AbortSignal):
Acepta la propiedad signal, lo que permite interrumplir peticiones HTTP en vuelo mediante un AbortController.
Esto es indispensable en funciones de autocompletado (como la barra de búsqueda)
para cancelar consultas obsoletas si el usuario tipea una nueva letra

#### tipado mediante genéricos (<T>):
httpGet<T>(...), permite a los adaptadores de la API (como openMeteoApi.ts)
indicar el DTO exacto que esperan recibir (httpGet<WeatherResponseDTO>(...)),
garantizando autocompletado y validación de tipos sin recurrir a any.


### Uso de HTTP

```
// En openMeteoApi.ts
const data = await httpGet<GeocodingResponseDTO>('https://geocoding-api.open-meteo.com/v1/search', {
  params: { name: 'Madrid', count: 5 },
  signal: abortController.signal
});
```





# 10. 



### `src/infrastructure/api/openMeteoApi.ts`

Este archivo encapsula la comunicación directa con las APIs externas de Open-Meteo (Búsqueda de ubicaciones y Pronóstico del tiempo), utilizando el cliente HTTP nativo `httpGet` y estructurando los parámetros requeridos por cada endpoint.

```typescript
import { httpGet } from '@infrastructure/http/httpClient';
import { GeocodingResponseDTO } from '@domain/dtos/geocoding.dto';
import { WeatherResponseDTO } from '@domain/dtos/weather.dto';
import { UnitSystem } from '@domain/models/unit.model';

const GEOCODING_API_URL = 'https://geocoding-api.open-meteo.com/v1/search';
const FORECAST_API_URL = 'https://api.open-meteo.com/v1/forecast';

/**
 * Busca ciudades o ubicaciones por nombre mediante la API de Geocoding.
 * 
 * @param query Texto introducido por el usuario (ej. "Buenos Aires").
 * @param signal AbortSignal opcional para cancelar la petición en caso de nuevo tipeo.
 */
export async function searchLocationsApi(
  query: string,
  signal?: AbortSignal
): Promise<GeocodingResponseDTO> {
  if (!query.trim()) {
    return { results: [], generationtime_ms: 0 };
  }

  return httpGet<GeocodingResponseDTO>(GEOCODING_API_URL, {
    params: {
      name: query,
      count: 10,
      language: 'es',
      format: 'json',
    },
    signal,
  });
}

/**
 * Consulta el pronóstico del tiempo actual, por horas y por días para una latitud y longitud.
 * 
 * @param latitude Coordenada de latitud.
 * @param longitude Coordenada de longitud.
 * @param unitSystem Sistema de unidades activo ('metric' o 'imperial').
 * @param signal AbortSignal opcional para cancelar peticiones pendientes.
 */
export async function getWeatherForecastApi(
  latitude: number,
  longitude: number,
  unitSystem: UnitSystem = 'metric',
  signal?: AbortSignal
): Promise<WeatherResponseDTO> {
  const temperatureUnit = unitSystem === 'imperial' ? 'fahrenheit' : 'celsius';
  const windSpeedUnit = unitSystem === 'imperial' ? 'mph' : 'kmh';

  return httpGet<WeatherResponseDTO>(FORECAST_API_URL, {
    params: {
      latitude,
      longitude,
      current: [
        'temperature_2m',
        'relative_humidity_2m',
        'apparent_temperature',
        'is_day',
        'weather_code',
        'wind_speed_10m',
      ].join(','),
      hourly: [
        'temperature_2m',
        'relative_humidity_2m',
        'apparent_temperature',
        'precipitation_probability',
        'weather_code',
        'wind_speed_10m',
      ].join(','),
      daily: [
        'weather_code',
        'temperature_2m_max',
        'temperature_2m_min',
        'precipitation_probability_max',
      ].join(','),
      timezone: 'auto',
      temperature_unit: temperatureUnit,
      wind_speed_unit: windSpeedUnit,
    },
    signal,
  });
}

```

---

### Puntos clave:

* **Soporte de unidades dinámico**: Adapta los query params `temperature_unit` (`celsius`/`fahrenheit`) y `wind_speed_unit` (`kmh`/`mph`) según el `UnitSystem` recibido, solicitando los datos calculados directamente desde los servidores de Open-Meteo.
* **`timezone: 'auto'`**: Solicita a la API resolver la zona horaria local de las coordenadas enviadas, garantizando que el pronóstico por horas coincida con el horario real de la ciudad seleccionada.
* **Peticiones ligeras**: Especifica explícitamente solo las variables meteorológicas necesarias en lugar de solicitar la carga completa de datos, optimizando el consumo de red y el tiempo de respuesta.



### Objetivo

adaptador de API concreto para los servicios de Open-Meteo
##### construir las peticiones HTTP con las URLs, opciones y parámetros específicos que exige este proveedor externo
retornando las respuestas en bruto tipadas formalmente como DTOs.


Aislamiento de URLs y endpoints de Open-Meteo
Centraliza las constantes GEOCODING_API_URL y FORECAST_API_URL dentro del módulo
impidiendo que el resto de la aplicación conozca los endpoints exactos del proveedor.

Traducción de parámetros de dominio a la API
Convierte opciones del sistema (como unitSystem: 'metric' | 'imperial') en los parámetros específicos que requiere el servidor (
(temperature_unit: 'fahrenheit' | 'celsius' y wind_speed_unit: 'mph' | 'kmh').

Delimitación de métricas requeridas
Define explícitamente cuáles variables meteorológicas necesita la aplicación en cada sección (current, hourly y daily)
formateando los arreglos como cadenas separadas por comas mediante .join(',').

Propagación del AbortSignal para cancelación de solicitudes
Acepta y transmite la señal signal hacia httpGet
permite interrumpir peticiones de red en vuelo cuando el usuario realiza una nueva búsqueda o cambia de ubicación

Validación previa defensiva
En searchLocationsApi, evalúa si la cadena ingresada está vacía (!query.trim())
para responder inmediatamente con una estructura válida vacía sin realizar un consumo innecesario de red.

```
[ weatherRepositoryImpl ]
           │
           ▼
[ openMeteoApi.ts ] ──(Pasa params + DTO)──> [ httpClient.ts ] ──(fetch)──> [ Open-Meteo Web API ]
```



# 11.


### `src/infrastructure/repositories/weatherRepositoryImpl.ts`

Este archivo implementa el repositorio central de clima. Actúa como el puente o mediador entre la capa de red (APIs que devuelven DTOs crudos) y la capa de aplicación/dominio (que consume únicamente modelos de dominio limpios mediante los mapeadores).

```typescript
import { searchLocationsApi, getWeatherForecastApi } from '@infrastructure/api/openMeteoApi';
import { mapGeocodingResponseToLocations } from '@domain/mappers/locationMapper';
import { mapWeatherDtoToModel } from '@domain/mappers/weatherMapper';
import { LocationModel } from '@domain/models/location.model';
import { WeatherModel } from '@domain/models/weather.model';
import { UnitSystem } from '@domain/models/unit.model';

/**
 * Contrato del Repositorio de Clima.
 */
export interface WeatherRepository {
  searchLocations(query: string, signal?: AbortSignal): Promise<LocationModel[]>;
  getWeatherForecast(
    latitude: number,
    longitude: number,
    unitSystem?: UnitSystem,
    signal?: AbortSignal
  ): Promise<WeatherModel>;
}

/**
 * Implementación concreta del repositorio de clima.
 * Conecta las llamadas a la API de Open-Meteo con los mapeadores que transforman DTOs en Modelos de Dominio.
 */
export const weatherRepository: WeatherRepository = {
  /**
   * Busca ubicaciones por término y retorna una colección de modelos LocationModel.
   */
  async searchLocations(query: string, signal?: AbortSignal): Promise<LocationModel[]> {
    const dto = await searchLocationsApi(query, signal);
    return mapGeocodingResponseToLocations(dto);
  },

  /**
   * Obtiene el pronóstico del tiempo para coordenadas dadas y retorna un modelo WeatherModel.
   */
  async getWeatherForecast(
    latitude: number,
    longitude: number,
    unitSystem: UnitSystem = 'metric',
    signal?: AbortSignal
  ): Promise<WeatherModel> {
    const dto = await getWeatherForecastApi(latitude, longitude, unitSystem, signal);
    return mapWeatherDtoToModel(dto);
  },
};

```

---

### Puntos clave:

1. **Inversión de Dependencias (DIP)**:
La capa de aplicación o los Hooks de React no llamarán directamente a `fetch` ni a `searchLocationsApi`. Dependerán exclusivamente del objeto `weatherRepository`, permitiendo simular (*mockear*) la capa de datos en pruebas unitarias sin hacer peticiones reales a la red.
2. **Garantía de Modelos Limpios**:
El repositorio asegura que ningún DTO con datos opcionales o arreglos desestructurados se escape hacia los componentes de React; únicamente retornará tipos seguros como `LocationModel[]` y `WeatherModel`.

---



### Objetivo

implementar el Patrón Repositorio (Repository Pattern)
actuando como la única puerta de enlace entre el origen de datos externo y el resto de la aplicación

1. Orquestación de API y Mapeo:
Combina en una sola operación atómica las peticiones de red realizadas por openMeteoApi
devuelven DTOs en bruto
con la transformación defensiva de los mapeadores con la transformación defensiva de los mapeadores

2. Aislamiento de la Capa de Dominio y Aplicación:
Garantiza que la UI y los Custom Hooks (useWeather, useLocationSearch)
dependan únicamente de abstracciones del dominio (LocationModel, WeatherModel).
Ningún componente o hook de React necesita saber que existe Open-Meteo, HTTP o DTOs en snake_case

3. Facilidad de Pruebas e Inversión de Dependencias (DIP):
exponer la interfaz de contrato WeatherRepository
proyecto cumple con el principio de Inversión de Dependencias (la D de SOLID):

Permite inyectar un MockWeatherRepository con datos estáticos durante pruebas unitarias

Facilita cambiar el proveedor de API (por ejemplo, migrar a OpenWeatherMap) creando un nuevo archivo que implemente WeatherRepository
sin modificar una sola línea de la capa de presentación

```
[ useWeather / useLocationSearch ] (Aplicación)
               │
               ▼  Solicita datos del contrato (WeatherRepository)
[ weatherRepositoryImpl.ts ]       (Infraestructura)
  ├── 1. Ejecuta openMeteoApi      ──> Obtiene DTO (JSON)
  └── 2. Invoca Mappers            ──> Convierte DTO a Modelo de Dominio
               │
               ▼  Devuelve LocationModel / WeatherModel
[ React UI Components ]            (Presentación)
```

# 12.


### `src/application/hooks/useDebounce.ts`

Este Custom Hook retrasa la actualización de un valor en el estado hasta que haya transcurrido un tiempo de espera especificado (`delay`) sin que el valor cambie. Es fundamental para evitar sobrecargar la API de Geocoding con llamadas en cada tecla presionada (*keystroke*).

```typescript
import { useState, useEffect } from 'react';

/**
 * Custom Hook para aplicar debounce a valores dinámicos (como la entrada de un buscador).
 * 
 * @template T Tipo del valor a diferir.
 * @param value Valor de entrada que cambia con frecuencia.
 * @param delay Tiempo de espera en milisegundos (por defecto 300ms).
 * @returns El valor diferido que solo se actualiza tras pausar la escritura.
 */
export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Limpia el temporizador si el valor o el delay cambian antes de cumplirse el tiempo
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

```

---

### Puntos clave:

* **Optimización de red**: Si el usuario escribe `"Buenos Aires"`, en lugar de realizar 12 peticiones consecutivas a la API, esperará a que el usuario deje de teclear durante `300ms` y emitirá únicamente 1 petición con el término final.
* **Limpieza de efectos (`Cleanup`)**: La función retribuida dentro de `useEffect` cancela el `setTimeout` anterior mediante `clearTimeout`, evitando ejecuciones o fugas de memoria si la entrada cambia rápidamente.


### Objetivo

retrasar la actualización de un valor de estado que cambia rápidamente (como el texto de un input)
hasta que transcurra un intervalo continuo de inactividad (delay, por defecto 300 ms).

prevenir la saturación de la API de Geocoding y optimizar el rendimiento del cliente.

Optimización de red y prevención de Rate Limiting:
Evita disparar una consulta HTTP por cada letra que el usuario teclea en el buscador
Sin debounce, escribir "Madrid" enviaría 6 peticiones HTTP distintas a Open-Meteo. Con debounce, solo se envía 1 petición cuando el usuario hace una pausa

Reinicio continuo del temporizador (clearTimeout):
función de limpieza (cleanup function) dentro del useEffect cancela el setTimeout previo cada vez que value cambia antes de que expiren los 300 ms
El temporizador solo logra completarse y actualizar debouncedValue cuando el usuario deja de escribir.

Reutilización Agnóstica y Genérica (<T>):
Al ser una función genérica de TypeScript (<T>), no está acoplada al tipo string ni a la lógica del clima
Puede diferir números, objetos, booleanos o cualquier otro estado dinámico dentro de la aplicación



# 13.


### `src/application/context/UnitContext.tsx`

Este archivo implementa el contexto global para gestionar el sistema de unidades activo (`metric` vs `imperial`) en toda la aplicación. Permite persistir la preferencia del usuario en `localStorage` y provee el hook `useUnit` para un consumo sencillo desde los componentes visuales.

```typescript
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { UnitSystem, UnitSymbols, UNIT_SYMBOLS } from '@domain/models/unit.model';

const STORAGE_KEY = 'weather_dashboard_unit_system';

interface UnitContextType {
  unitSystem: UnitSystem;
  symbols: UnitSymbols;
  setUnitSystem: (system: UnitSystem) => void;
  toggleUnitSystem: () => void;
}

const UnitContext = createContext<UnitContextType | undefined>(undefined);

interface UnitProviderProps {
  children: ReactNode;
}

/**
 * Proveedor del contexto del sistema de unidades.
 * Recupera y persiste la preferencia del usuario en localStorage.
 */
export const UnitProvider: React.FC<UnitProviderProps> = ({ children }) => {
  const [unitSystem, setUnitSystemState] = useState<UnitSystem>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === 'imperial' || saved === 'metric' ? saved : 'metric';
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, unitSystem);
  }, [unitSystem]);

  const setUnitSystem = (system: UnitSystem) => {
    setUnitSystemState(system);
  };

  const toggleUnitSystem = () => {
    setUnitSystemState((prev) => (prev === 'metric' ? 'imperial' : 'metric'));
  };

  const symbols = UNIT_SYMBOLS[unitSystem];

  return (
    <UnitContext.Provider
      value={{
        unitSystem,
        symbols,
        setUnitSystem,
        toggleUnitSystem,
      }}
    >
      {children}
    </UnitContext.Provider>
  );
};

/**
 * Custom Hook para acceder al sistema de unidades activo y sus símbolos.
 */
export function useUnit(): UnitContextType {
  const context = useContext(UnitContext);
  if (!context) {
    throw new Error('useUnit debe ser utilizado dentro de un UnitProvider');
  }
  return context;
}

```

---

### Puntos clave:

1. **Persistencia en `localStorage**`:
Aprovecha la función de inicialización perezosa (*lazy initialization*) de `useState` para leer la preferencia del usuario guardada previamente al momento de montar la app.
2. **Acceso directo a símbolos**:
Expone la propiedad `symbols` calculada automáticamente (`°C`/`°F`, `km/h`/`mph`), permitiendo a los componentes de UI mostrar la etiqueta correcta sin importar dónde estén ubicados.
3. **Inyección de Dependencias segura**:
El Custom Hook `useUnit()` valida si está envuelto dentro del `UnitProvider` y lanza un mensaje explicativo si un componente intenta consumirlo fuera del árbol correspondiente.



### Objetivo

gestionar, compartir y persistir globalmente la preferencia del sistema de unidades (métrico vs imperial)
a lo largo de toda la aplicación utilizando la API de Contexto de React


Gestión de estado global del sistema de unidades:
Evita el problema de transmisión manual de propiedades (prop drilling), permitiendo que cualquier componente de la interfaz
(como UnitToggle.tsx, CurrentWeatherCard.tsx o HourlyForecast.tsx)
consulte o altere las unidades activas de forma directa


Persistencia en localStorage: Lazy State Initialization

Utiliza una función dentro del useState(() => ...) para leer de forma síncrona localStorage únicamente en el montaje inicial del componente.

##### Si el usuario ya configuró sus preferencias previamente, las restaura.
##### Si es la primera visita o la clave es inválida, se establece 'metric' por defecto.
##### El useEffect asegura que cualquier cambio futuro de unitSystem se guarde automáticamente en el navegador.


Derivación de símbolos de medición (symbols):
Calcula dinámicamente los símbolos correspondientes (symbols = UNIT_SYMBOLS[unitSystem])
para proveer de inmediato los textos de unidades a la UI
(ej. °C y km/h para métrico; °F y mph para imperial).


Acceso seguro mediante el Custom Hook useUnit:
Expone el hook useUnit(), el cual valida si el contexto existe dentro del árbol de componentes (!context).
Si un desarrollador intenta usar useUnit() fuera del UnitProvider, lanza un error explícito en tiempo de desarrollo.

```
								┌────────────────────────────────┐
                               │ UnitProvider (Capa Aplicación) │
                               └───────────────┬────────────────┘
                                               │
                    ┌──────────────────────────┴──────────────────────────┐
                    ▼                                                     ▼
┌──────────────────────────────────────┐               ┌──────────────────────────────────────┐
│       Visualización / UI             │               │         Peticiones de Red            │
│ Componentes (ej. UnitToggle, Card)   │               │ Hook `useWeather`                    │
│ Consumen: `symbols`, `toggleUnit`    │               │ Pasa `unitSystem` al Repositorio     │
└──────────────────────────────────────┘               └──────────────────────────────────────┘
```




# 14. 


### `src/application/hooks/useLocationSearch.ts`

Este Custom Hook gestiona el ciclo de vida completo de la búsqueda de ubicaciones: sincroniza el término ingresado por el usuario, aplica el *debounce*, ejecuta la consulta asíncrona mediante el `weatherRepository` y maneja los estados de carga, error y cancelación de peticiones (*AbortController*).

```typescript
import { useState, useEffect } from 'react';
import { LocationModel } from '@domain/models/location.model';
import { weatherRepository } from '@infrastructure/repositories/weatherRepositoryImpl';
import { useDebounce } from '@application/hooks/useDebounce';

export interface UseLocationSearchReturn {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  locations: LocationModel[];
  isLoading: boolean;
  error: string | null;
  clearSearch: () => void;
}

/**
 * Custom Hook para gestionar la búsqueda asíncrona de ciudades con autocomplete.
 * 
 * @param delay Tiempo de debounce en milisegundos (por defecto 300ms).
 */
export function useLocationSearch(delay: number = 300): UseLocationSearchReturn {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [locations, setLocations] = useState<LocationModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const debouncedSearchTerm = useDebounce(searchTerm, delay);

  useEffect(() => {
    // Si la cadena de búsqueda está vacía, reseteamos los resultados sin llamar a la red
    if (!debouncedSearchTerm.trim()) {
      setLocations([]);
      setIsLoading(false);
      setError(null);
      return;
    }

    const controller = new AbortController();

    async function executeSearch() {
      setIsLoading(true);
      setError(null);

      try {
        const results = await weatherRepository.searchLocations(
          debouncedSearchTerm,
          controller.signal
        );
        setLocations(results);
      } catch (err: unknown) {
        // Ignora el error si la petición fue abortada intencionalmente
        if (err instanceof Error && err.name === 'AbortError') {
          return;
        }
        setError('Error al buscar ciudades. Inténtalo de nuevo.');
        setLocations([]);
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    executeSearch();

    // Aborta la petición HTTP pendiente si el usuario sigue tipeando o desmonta el componente
    return () => {
      controller.abort();
    };
  }, [debouncedSearchTerm]);

  const clearSearch = () => {
    setSearchTerm('');
    setLocations([]);
    setError(null);
  };

  return {
    searchTerm,
    setSearchTerm,
    locations,
    isLoading,
    error,
    clearSearch,
  };
}

```

---

### Puntos clave:

1. **Prevención de Carrera de Datos (*Race Conditions*)**:
Usa `AbortController` para cancelar automáticamente la petición de red anterior cuando `debouncedSearchTerm` cambia. Esto garantiza que respuestas lentas o fuera de orden no sobrescriban los resultados más recientes.
2. **Silenciado de `AbortError**`:
Atrapa los errores lanzados por la cancelación de la API `fetch` e impide que se reflejen como fallos visibles para el usuario final.
3. **Limpieza simplificada**:
Expone `clearSearch` para que la UI pueda vaciar la entrada y los resultados con un solo clic en el botón de limpieza de la barra de búsqueda.



### Objetivo

encapsular y gestionar toda la lógica de estado asíncrona para la búsqueda de ciudades con autocompletado en la interfaz de usuario
Actúa como orquestador entre el componente visual de búsqueda (SearchBar.tsx), la técnica de rendimiento (useDebounce) y el contrato de infraestructura (weatherRepository),
manteniendo a la UI completamente aislada de los detalles de red.

Integración con Debounce: Aplica useDebounce sobre el término de búsqueda (searchTerm) para diferir las consultas a la red hasta que el usuario pause la escritura.

Cancelación de peticiones obsoletas (AbortController): Crea un AbortController por cada ciclo de useEffect
Si el término de búsqueda cambia mientras una petición sigue en vuelo o el componente se desmonta
Si el término de búsqueda cambia mientras una petición sigue en vuelo o el componente se desmonta, la función de limpieza (return () => controller.abort()) interrumpe la solicitud HTTP inmediatamente, evitando condiciones de carrera (race conditions) y respuestas desactualizadas.

Manejo defensivo de errores: Evalúa los fallos dentro de un bloque try/catch, pero ignora intencionalmente las excepciones de tipo AbortError para no disparar alertas de error falsas cuando una solicitud se cancela por acción del usuario.

Consumo puro de Dominio: Devuelve únicamente instancias de LocationModel[] a la capa de presentación, asegurando que la UI interactúe con modelos limpios.

Reset de estado centralizado (clearSearch): Entrega una función para limpiar el campo de texto, la lista desplegable de resultados y los errores acumulados desde un solo botón de borrado en la UI.


```
1. Usuario escribe "Mad" ──────> Actualiza `searchTerm` a "Mad"
2. `useDebounce` espera 300ms ─> Actualiza `debouncedSearchTerm` a "Mad"
3. Se dispara `useEffect` ────> Crea `AbortController` y activa `isLoading = true`
4. Consulta el Repositorio ───> `weatherRepository.searchLocations("Mad", signal)`
5. Actualiza la Interfaz ─────> Guarda `LocationModel[]` en `locations` y desactiva `isLoading`
```




# 15. 


### `src/application/hooks/useWeather.ts`

Este Custom Hook gestiona la carga del pronóstico del tiempo para la ciudad seleccionada.
Reacciona automáticamente tanto al cambio de ubicación como a la conmutación entre unidades métricas e imperiales, cancelando peticiones en vuelo con `AbortController`.

```typescript
import { useState, useEffect, useCallback } from 'react';
import { LocationModel } from '@domain/models/location.model';
import { WeatherModel } from '@domain/models/weather.model';
import { weatherRepository } from '@infrastructure/repositories/weatherRepositoryImpl';
import { useUnit } from '@application/context/UnitContext';

export interface UseWeatherReturn {
  selectedLocation: LocationModel | null;
  setSelectedLocation: (location: LocationModel | null) => void;
  weather: WeatherModel | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

/**
 * Custom Hook para consultar y mantener actualizado el clima de la ciudad seleccionada.
 * Reacciona automáticamente ante cambios de ubicación o del sistema de unidades.
 * 
 * @param initialLocation Ubicación inicial opcional para cargar al montar.
 */
export function useWeather(initialLocation: LocationModel | null = null): UseWeatherReturn {
  const [selectedLocation, setSelectedLocation] = useState<LocationModel | null>(initialLocation);
  const [weather, setWeather] = useState<WeatherModel | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { unitSystem } = useUnit();

  const fetchWeather = useCallback(async (signal?: AbortSignal) => {
    if (!selectedLocation) {
      setWeather(null);
      setIsLoading(false);
      setError(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const data = await weatherRepository.getWeatherForecast(
        selectedLocation.latitude,
        selectedLocation.longitude,
        unitSystem,
        signal
      );
      setWeather(data);
    } catch (err: unknown) {
      if (err instanceof Error && err.name === 'AbortError') {
        return;
      }
      setError('No se pudo obtener la información meteorológica. Inténtalo de nuevo.');
      setWeather(null);
    } finally {
      if (!signal?.aborted) {
        setIsLoading(false);
      }
    }
  }, [selectedLocation, unitSystem]);

  useEffect(() => {
    const controller = new AbortController();
    fetchWeather(controller.signal);

    return () => {
      controller.abort();
    };
  }, [fetchWeather]);

  const refetch = async () => {
    await fetchWeather();
  };

  return {
    selectedLocation,
    setSelectedLocation,
    weather,
    isLoading,
    error,
    refetch,
  };
}

```

---

### Puntos clave:

1. **Sincronización Reactiva con `UnitContext**`:
`useCallback` incluye `unitSystem` en su arreglo de dependencias. Cuando el usuario cambia de °C a °F en la interfaz, el hook vuelve a solicitar automáticamente los datos a la API con las nuevas unidades sin requerir interacción manual.
2. **Acción de Recarga Manual (`refetch`)**:
Expone la función `refetch` para permitir botones de *"Actualizar"* en los componentes de la interfaz.
3. **Cancelación Segura**:
Garantiza que si el usuario cambia rápidamente entre varias ciudades del buscador, solo la respuesta de la última ciudad seleccionada se guarde en el estado `weather`.

---



### Objetivo

coordinar y gestionar la carga, actualización y estado del pronóstico meteorológico para la ciudad activa
reaccionando automáticamente tanto a los cambios de ubicación como al cambio de unidades (métrico / imperial).


1. Reactividad Doble (Ubicación + Unidades)
##### El hook está suscrito a dos fuentes de cambio:

La ubicación seleccionada (selectedLocation).
El sistema de unidades global (unitSystem, consumido desde UnitContext).

##### Cualquier cambio en la ciudad elegida o al presionar el interruptor de °C/°F dispara automáticamente una nueva consulta a la red con las coordenadas y unidades correspondientes

2. Gestión Completa del Ciclo de Vida Asíncrono
##### Centraliza los tres estados clave que necesita la interfaz de usuario para renderizarse correctamente

weather: El modelo de dominio (WeatherModel) con los datos procesados.
isLoading: Bandera booleana para mostrar skeletons o indicadores de carga.
error: Mensaje descriptivo si la llamada al repositorio falla

3. Prevención de Condición de Carrera (Race Conditions): useCallback y AbortController
##### Encapsula la función de carga en useCallback para mantener una referencia estable en memoria.

En cada ejecución de useEffect, genera un nuevo AbortController.
Si el usuario cambia de ciudad rápidamente antes de que la petición actual termine, el useEffect anterior invoca controller.abort()
descartando la respuesta obsoleta y evitando que datos de una ciudad anterior sobrescriban a la nueva

4. Recarga Manual (refetch)
Expone la función refetch para permitir que los componentes de la interfaz fuerzen un refresco de datos bajo demanda
(por ejemplo, al presionar un botón de "Reintentar" en la pantalla de error o "Actualizar" en la cabecera).

```
[ Selección de Ciudad ]   O   [ Cambio °C / °F ]
           │                         │
           └────────────┬────────────┘
                        ▼
            Recalcula `fetchWeather` (useCallback)
                        │
                        ▼
            Dispara `useEffect` ──> Cancela petición anterior (AbortController)
                        │
                        ▼
      `weatherRepository.getWeatherForecast(lat, lon, unitSystem)`
                        │
                        ▼
         Actualiza estado: `setWeather(WeatherModel)`
                        │
                        ▼
   React re-renderiza componentes de visualización (Card, Hourly, Daily)
```



# 16. 

### `src/presentation/components/WeatherIcon.tsx`

Este componente renderiza dinámicamente los íconos meteorológicos de `lucide-react` basándose en la propiedad `iconName` provista por el modelo de dominio. Mantiene un diccionario explícito de los íconos utilizados para optimizar el *tree-shaking* y prevenir fallos en tiempo de ejecución.

```typescript
import React from 'react';
import {
  Sun,
  SunDim,
  Moon,
  CloudSun,
  CloudMoon,
  Cloud,
  CloudFog,
  CloudDrizzle,
  CloudHail,
  CloudRain,
  CloudRainWind,
  Snowflake,
  CloudSunRain,
  CloudMoonRain,
  CloudLightning,
  HelpCircle,
  LucideProps,
} from 'lucide-react';

/**
 * Registro de componentes de íconos mapeados desde el estándar WMO.
 */
const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  Sun,
  SunDim,
  Moon,
  CloudSun,
  CloudMoon,
  Cloud,
  CloudFog,
  CloudDrizzle,
  CloudHail,
  CloudRain,
  CloudRainWind,
  Snowflake,
  CloudSunRain,
  CloudMoonRain,
  CloudLightning,
  HelpCircle,
};

interface WeatherIconProps extends Omit<LucideProps, 'ref'> {
  name: string;
}

/**
 * Renderiza dinámicamente el ícono meteorológico de Lucide correspondiente.
 * Caerá en un ícono genérico (HelpCircle) si el nombre no se encuentra en el mapa.
 */
export const WeatherIcon: React.FC<WeatherIconProps> = ({ name, ...props }) => {
  const IconComponent = ICON_MAP[name] ?? HelpCircle;

  return <IconComponent {...props} />;
};

```

---

### Puntos clave:

* **Manejo de propiedades genéricas**: Hereda `LucideProps`, permitiendo pasarle directamente atributos estándar como `className`, `size`, `color`, `strokeWidth`, etc.
* **Resiliencia con Fallback**: Si se pasa una cadena no reconocida o un ícono no importado, renderiza el componente `HelpCircle` por defecto sin interrumpir el renderizado de React.
* **Importación Selectiva**: Importa únicamente los íconos declarados en `wmoMapper.ts` en lugar de la librería completa, minimizando el impacto en el tamaño final del *bundle*.


### Objetivo

renderizador dinámico de íconos
traduciendo las cadenas de texto producidas por la capa de dominio (WeatherCondition.iconName)
en componentes de SVG reales de la librería Lucide React.

1. Puente entre Dominio y Presentación (Traducción String $\rightarrow$ SVG)
En el dominio, wmoMapper.ts no puede retornar componentes de React
(para no acoplar el dominio a la librería de renderizado).
En su lugar, emite cadenas como 'Sun', 'CloudRain' o 'Snowflake'.
Este componente recibe ese string y devuelve el componente de ícono correspondiente.

2. Patrón Diccionario (Registry Pattern)
Mantiene un mapa estático ICON_MAP con los íconos de Lucide explicitados

garantiza:

Seguridad de bundle y Tree Shaking: Solo se incluyen en la compilación los íconos importados explícitamente.
Búsqueda $O(1)$: La resolución del ícono ocurre instantáneamente mediante una consulta por clave en el objeto.

3. Fallback defensivo (HelpCircle)
Usa el operador de coalescencia nula (??):

`const IconComponent = ICON_MAP[name] ?? HelpCircle;`

Si por alguna razón la API o el mapeador entregan una cadena que no está mapeada en ICON_MAP
la aplicación renderiza de forma segura un ícono de signo de interrogación (HelpCircle) en lugar de romper el renderizado de la pantalla.

4. Reutilización de estilos y propiedades (...props)
Acepta todas las propiedades nativas de Lucide (size, color, className, etc.) mediante LucideProps
permitiendo personalizar el tamaño o los colores del ícono directamente con clases de Tailwind CSS en cualquier tarjeta o vista.

```
[ wmoMapper.ts ] ──> iconName: "CloudRain" (String de Dominio)
                           │
                           ▼
[ WeatherIcon.tsx ] ──> ICON_MAP["CloudRain"] ──> <CloudRain className="w-6 h-6" /> (UI)
```



# 17


### `src/presentation/components/SearchBar.tsx`

Este componente implementa el cuadro de búsqueda con autocompletado en tiempo real. Integra el hook `useLocationSearch`, gestiona el cierre del menú desplegable al hacer clic fuera del componente y notifica a la vista principal cuando el usuario selecciona una ciudad.

```typescript
import React, { useRef, useState, useEffect } from 'react';
import { Search, X, Loader2, MapPin } from 'lucide-react';
import { LocationModel } from '@domain/models/location.model';
import { useLocationSearch } from '@application/hooks/useLocationSearch';

interface SearchBarProps {
  onSelectLocation: (location: LocationModel) => void;
}

/**
 * Componente de barra de búsqueda con autocompletado para consultar ciudades.
 */
export const SearchBar: React.FC<SearchBarProps> = ({ onSelectLocation }) => {
  const {
    searchTerm,
    setSearchTerm,
    locations,
    isLoading,
    error,
    clearSearch,
  } = useLocationSearch();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Cierra el menú desplegable al hacer clic en cualquier otra parte de la pantalla
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (location: LocationModel) => {
    onSelectLocation(location);
    clearSearch();
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-md mx-auto">
      {/* Campo de entrada de texto */}
      <div className="relative flex items-center">
        <Search className="absolute left-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Buscar ciudad (ej. Buenos Aires, Madrid)..."
          className="w-full pl-10 pr-10 py-2.5 bg-slate-800/80 border border-slate-700/80 rounded-xl text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all shadow-sm backdrop-blur-md"
        />

        {isLoading && (
          <Loader2 className="absolute right-3.5 h-4 w-4 text-slate-400 animate-spin" />
        )}

        {!isLoading && searchTerm && (
          <button
            type="button"
            onClick={() => {
              clearSearch();
              setIsOpen(false);
            }}
            className="absolute right-3.5 text-slate-400 hover:text-slate-200 transition-colors"
            aria-label="Limpiar búsqueda"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Menú desplegable con resultados de búsqueda */}
      {isOpen && searchTerm.trim().length > 0 && (
        <div className="absolute z-50 left-0 right-0 mt-2 bg-slate-900/95 border border-slate-800 rounded-xl shadow-2xl overflow-hidden backdrop-blur-lg">
          {error && (
            <div className="p-3 text-xs text-rose-400 text-center">
              {error}
            </div>
          )}

          {!isLoading && !error && locations.length === 0 && (
            <div className="p-4 text-xs text-slate-400 text-center">
              No se encontraron ciudades con ese nombre.
            </div>
          )}

          {locations.length > 0 && (
            <ul className="max-h-60 overflow-y-auto divide-y divide-slate-800/50">
              {locations.map((location) => (
                <li key={location.id}>
                  <button
                    type="button"
                    onClick={() => handleSelect(location)}
                    className="w-full px-4 py-3 flex items-center gap-3 text-left hover:bg-slate-800/60 transition-colors group"
                  >
                    <MapPin className="h-4 w-4 text-slate-400 group-hover:text-blue-400 shrink-0 transition-colors" />
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm font-medium text-slate-200 truncate">
                        {location.name}
                      </span>
                      <span className="text-xs text-slate-400 truncate">
                        {location.region ? `${location.region}, ` : ''}{location.country}
                      </span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

```

---

### Puntos clave:

* **Cierre por clic externo (`click outside`)**: Utiliza `useRef` atado a un listener global de eventos `mousedown` para ocultar la lista flotante si se interactúa fuera del contenedor.
* **Manejo de estados en UI**: Muestra un indicador de carga giratorio (`Loader2`), mensajes de estado cuando no hay resultados y el botón de borrado rápido (`X`).
* **Estilos Tailwind Glassmorphism**: Aplica `backdrop-blur-md` y fondos semi-transparentes (`bg-slate-800/80`) alineándose con la estética moderna solicitada.



### Objetivo

proporcionar la interfaz visual interactiva de búsqueda y autocompletado de ciudades
permitiendo al usuario teclear un término, visualizar las coincidencias de ubicación en tiempo real en un desplegable
seleccionar una para actualizar la aplicación.

Aislamiento de la lógica asíncrona (Capa de Presentación pura):
Toda la complejidad de peticiones de red, debounce, cancelación mediante AbortController y manejo de errores se delega al hook useLocationSearch().
El componente únicamente se encarga de renderizar la UI y gestionar la apertura/cierre del menú desplegable (isOpen).

Cierre intuitivo al hacer clic fuera (Click Outside):
Implementa un useEffect que escucha el evento global mousedown mediante una referencia al DOM (useRef<HTMLDivElement>).
Si el usuario hace clic en cualquier lugar fuera del contenedor del buscador, el menú desplegable se cierra automáticamente.


Feedback visual inmediato (UX):

Soporta múltiples estados de la interfaz en función de los datos del hook:

Cargando: Muestra el spinner animado Loader2 cuando la petición HTTP está en vuelo.
Escribiendo: Despliega el botón X para borrar rápidamente el texto con clearSearch().
Sin resultados o Error: Muestra mensajes claros cuando no hay coincidencias o si ocurrió un fallo de red.


Comunicación con la vista principal (onSelectLocation):
Al hacer clic en una ciudad de la lista, ejecuta la función handleSelect(location), notificando al componente padre (App.tsx) con el modelo de dominio LocationModel, limpiando la búsqueda y cerrando el desplegable.

```

[ Entrada de texto / Focus ] ──> Abre desplegable (`isOpen = true`)
            │
            ▼
[ hook `useLocationSearch` ] ──> Retorna `isLoading`, `error` o `locations[]`
            │
            ▼
[ Selección de una Ciudad ] ──> `onSelectLocation(location)` ──> Limpia y cierra desplegable
```





# 18.


### `src/presentation/components/CurrentWeatherCard.tsx`

Este componente es la tarjeta principal que muestra las condiciones meteorológicas en tiempo real para la ciudad seleccionada: temperatura actual, sensación térmica, humedad, velocidad del viento e información del estado del tiempo.

```typescript
import React from 'react';
import { LocationModel } from '@domain/models/location.model';
import { CurrentWeatherModel } from '@domain/models/weather.model';
import { useUnit } from '@application/context/UnitContext';
import { WeatherIcon } from '@presentation/components/WeatherIcon';
import { Droplets, Wind, Thermometer, MapPin } from 'lucide-react';

interface CurrentWeatherCardProps {
  location: LocationModel;
  current: CurrentWeatherModel;
}

/**
 * Tarjeta destacada que muestra las condiciones meteorológicas actuales de la ciudad.
 */
export const CurrentWeatherCard: React.FC<CurrentWeatherCardProps> = ({
  location,
  current,
}) => {
  const { symbols } = useUnit();

  return (
    <div className="w-full bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 border border-slate-700/60 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
      {/* Resplandor decorativo de fondo */}
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Encabezado: Nombre de la ciudad y ubicación */}
      <div className="flex items-start justify-between gap-4 mb-6 relative z-10">
        <div>
          <div className="flex items-center gap-2 text-blue-400 mb-1">
            <MapPin className="h-4 w-4 shrink-0" />
            <span className="text-xs font-semibold uppercase tracking-wider">Ubicación Actual</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
            {location.name}
          </h2>
          <p className="text-sm text-slate-400">
            {location.region ? `${location.region}, ` : ''}{location.country}
          </p>
        </div>

        {/* Ícono de estado del clima en formato grande */}
        <div className="p-3 bg-slate-800/60 border border-slate-700/50 rounded-2xl shadow-inner shrink-0">
          <WeatherIcon
            name={current.condition.iconName}
            className="h-12 w-12 text-blue-400"
          />
        </div>
      </div>

      {/* Bloque Central: Temperatura Principal y Condición */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 my-8 pb-6 border-b border-slate-800/80 relative z-10">
        <div className="flex items-start">
          <span className="text-6xl sm:text-7xl font-extrabold text-slate-100 tracking-tighter">
            {current.temperature}
          </span>
          <span className="text-2xl sm:text-3xl font-medium text-blue-400 ml-1">
            {symbols.temperature}
          </span>
        </div>

        <div className="sm:text-right">
          <p className="text-lg font-semibold text-slate-200 capitalize">
            {current.condition.description}
          </p>
          <p className="text-xs text-slate-400 flex items-center sm:justify-end gap-1 mt-0.5">
            <Thermometer className="h-3.5 w-3.5 text-slate-400" />
            Sensación térmica: <span className="text-slate-300 font-medium">{current.apparentTemperature}{symbols.temperature}</span>
          </p>
        </div>
      </div>

      {/* Métrica Secundaria: Humedad y Viento */}
      <div className="grid grid-cols-2 gap-4 relative z-10">
        <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-800/40 border border-slate-800/60">
          <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
            <Droplets className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xs text-slate-400 block font-medium">Humedad</span>
            <span className="text-base font-semibold text-slate-100">
              {current.humidity}%
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-800/40 border border-slate-800/60">
          <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
            <Wind className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xs text-slate-400 block font-medium">Viento</span>
            <span className="text-base font-semibold text-slate-100">
              {current.windSpeed} {symbols.windSpeed}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

```

---

### Puntos clave:

* **Simbología Dinámica**: Consume `symbols` desde el `useUnit` Context para formatear de forma transparente si la velocidad está en `km/h` o `mph` y si la temperatura está en `°C` o `°F`.
* **Diseño adaptativo (Responsive)**: Ajusta los tamaños de fuente (`text-6xl` a `text-7xl`) e interlineado para asegurar una legibilidad limpia tanto en dispositivos móviles como en pantallas de escritorio.
* **Manejo Estético**: Utiliza degradados (`bg-gradient-to-br`), desenfoque en capas de fondo (`backdrop-blur-xl`) y bordes semi-transparentes (`border-slate-700/60`) acorde al estilo visual moderno.




### Objetivo

tarjeta principal o "Hero Component" de la interfaz
##### encargada de visualizar de manera clara, atractiva y jerarquizada todas las condiciones meteorológicas del momento para la ciudad seleccionada

1. Jerarquía visual y diseño destacado (Hero Section)
##### Sirve como el punto focal visual de la aplicación. Utiliza tipografía de gran tamaño (text-6xl / text-7xl para la temperatura),
fondos con degradados, efectos de cristal (glassmorphism con backdrop-blur) e íconos destacados para llamar la atención del usuario de inmediato.

2. Componente de Presentación Pura (Presentational / Dumb Component)
No maneja lógica de negocio, peticiones HTTP ni estados complejos
##### Recibe los datos ya procesados desde la capa de dominio (location: LocationModel y current: CurrentWeatherModel) e imprime la interfaz.

3. Inyección de unidades dinámicas (useUnit)
##### Se conecta al contexto de unidades de la aplicación mediante el hook useUnit().
Esto le permite mostrar automáticamente los símbolos correspondientes (°C o °F, km/h o mph) según el sistema de medición que haya seleccionado el usuario globalmente
sin necesidad de recibir esas unidades por props.

4. Integración con componentes auxiliares (WeatherIcon)
##### Delega la renderización del ícono del clima al componente WeatherIcon
##### pasándole únicamente la cadena current.condition.iconName producida por los mapeadores de dominio.

5. Estructuración en bloques de información:

Encabezado: Nombre de la ciudad, provincia/región y país (MapPin).

Bloque Central: Temperatura actual, descripción de la condición (ej: "Lluvia moderada") y sensación térmica (Thermometer).

Grid de Métricas Secundarias: Casilleros con íconos específicos para Humedad (Droplets) y Viento (Wind).

```
[ Contexto Global ] ──> symbols (°C, km/h) ──┐
                                             ├─> [ CurrentWeatherCard ] ──> UI Renderizada
[ Props Padre ] ────> location, current ────┘          │
                                                       └─> [ WeatherIcon ]
```



# 19.


### `src/presentation/components/HourlyForecast.tsx`

Este componente renderiza un carrusel con desplazamiento horizontal que muestra el pronóstico del tiempo hora por hora para las próximas 24 horas, incluyendo temperatura, estado del clima y probabilidad de precipitación.

```typescript
import React from 'react';
import { HourlyForecastModel } from '@domain/models/weather.model';
import { useUnit } from '@application/context/UnitContext';
import { WeatherIcon } from '@presentation/components/WeatherIcon';
import { Clock, Droplets } from 'lucide-react';

interface HourlyForecastProps {
  hourly: HourlyForecastModel[];
}

/**
 * Componente de carrusel con desplazamiento horizontal para el pronóstico por horas (próximas 24h).
 */
export const HourlyForecast: React.FC<HourlyForecastProps> = ({ hourly }) => {
  const { symbols } = useUnit();

  if (!hourly || hourly.length === 0) {
    return null;
  }

  return (
    <div className="w-full bg-slate-900/80 border border-slate-800/80 rounded-3xl p-6 shadow-xl backdrop-blur-xl">
      {/* Encabezado del módulo */}
      <div className="flex items-center gap-2 mb-4 text-slate-300">
        <Clock className="h-4 w-4 text-blue-400" />
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Pronóstico Próximas 24 Horas
        </h3>
      </div>

      {/* Carrusel deslizable horizontalmente */}
      <div className="flex gap-3 overflow-x-auto pb-2 pt-1 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
        {hourly.map((item, index) => (
          <div
            key={`${item.time}-${index}`}
            className="flex flex-col items-center justify-between min-w-[4.75rem] p-3.5 bg-slate-800/40 border border-slate-800/60 rounded-2xl hover:bg-slate-800/80 hover:border-slate-700/80 transition-all shrink-0"
          >
            {/* Hora formatted (e.g., "14:00" o "Ahora") */}
            <span className="text-xs font-medium text-slate-400">
              {index === 0 ? 'Ahora' : item.formattedTime}
            </span>

            {/* Ícono de condición */}
            <div className="my-2 p-2 rounded-xl bg-slate-800/50">
              <WeatherIcon
                name={item.condition.iconName}
                className="h-6 w-6 text-blue-400"
              />
            </div>

            {/* Temperatura */}
            <span className="text-base font-bold text-slate-100">
              {item.temperature}{symbols.temperature}
            </span>

            {/* Probabilidad de precipitación (si es mayor a 0) */}
            {item.precipitationProbability > 0 ? (
              <span className="flex items-center gap-0.5 text-[10px] font-semibold text-blue-400 mt-1">
                <Droplets className="h-3 w-3" />
                {item.precipitationProbability}%
              </span>
            ) : (
              <div className="h-4 mt-1" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

```

---

### Puntos clave:

* **Contenedor con scroll horizontal**: Utiliza `overflow-x-auto` junto con `shrink-0` en los ítems para garantizar una navegación táctil/trackpad fluida sin romper el layout.
* **Distinción visual del momento actual**: Reemplaza el texto de la hora por `"Ahora"` en la primera iteración (`index === 0`) para ofrecer una lectura instantánea.
* **Indicador condicional de lluvias**: Muestra el porcentaje de probabilidad de precipitaciones únicamente si `precipitationProbability > 0`, manteniendo un espacio de reserva para preservar la simetría vertical de todas las tarjetas.


### Objetivo

##### presentar la evolución temporal del clima en el corto plazo (próximas 24 horas)
mediante una línea de tiempo horizontal compacta y deslizable.

1. Visualización de Pronóstico de Corto Plazo
Muestra la tendencia hora a hora de la temperatura, las condiciones meteorológicas y la probabilidad de lluvias para ayudar al usuario a planificar sus actividades inmediatas del día.

2. UX con Carrusel Horizontal (Horizontal Scroll)
Utiliza un contenedor con overflow-x-auto y tarjetas fijas (shrink-0, min-w-[4.75rem])
permiten navegar por las 24 horas de forma fluida sin saturar el espacio vertical en pantallas móviles o de escritorio

3. Adaptación Contextual ("Ahora" vs. Hora Formateada)
Modifica el primer elemento del arreglo (index === 0)
para reemplazar la hora con la etiqueta "Ahora", mejorando la claridad de la interfaz respecto al momento actual

4. Alineación Visual Defensiva en Métricas Opcionales
Solo muestra el porcentaje de lluvia (Droplets) si precipitationProbability > 0
Si es 0, inserta un espaciador invisible (<div className="h-4 mt-1" aria-hidden="true" />) para evitar que las tarjetas se desalineen verticalmente.

5. Inyección de Unidades Globales (useUnit)
Consulta el UnitContext para adjuntar el símbolo de temperatura (°C o °F) correspondiente según la configuración seleccionada por el usuario



# 20.


### `src/presentation/components/DailyForecast.tsx`

Este componente renderiza la lista del pronóstico meteorológico para los próximos 7 días, detallando el nombre del día, la condición del clima, la probabilidad de precipitación y el rango de temperaturas máximas y mínimas.

```typescript
import React from 'react';
import { DailyForecastModel } from '@domain/models/weather.model';
import { useUnit } from '@application/context/UnitContext';
import { WeatherIcon } from '@presentation/components/WeatherIcon';
import { Calendar, Droplets } from 'lucide-react';

interface DailyForecastProps {
  daily: DailyForecastModel[];
}

/**
 * Componente que muestra la proyección del tiempo de los próximos 7 días.
 */
export const DailyForecast: React.FC<DailyForecastProps> = ({ daily }) => {
  const { symbols } = useUnit();

  if (!daily || daily.length === 0) {
    return null;
  }

  return (
    <div className="w-full bg-slate-900/80 border border-slate-800/80 rounded-3xl p-6 shadow-xl backdrop-blur-xl">
      {/* Encabezado del módulo */}
      <div className="flex items-center gap-2 mb-4 text-slate-300">
        <Calendar className="h-4 w-4 text-blue-400" />
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Pronóstico de 7 Días
        </h3>
      </div>

      {/* Lista vertical de días */}
      <div className="divide-y divide-slate-800/60">
        {daily.map((item, index) => (
          <div
            key={`${item.date}-${index}`}
            className="py-3.5 first:pt-1 last:pb-1 flex items-center justify-between gap-4"
          >
            {/* Nombre del día y descripción corta */}
            <div className="w-28 sm:w-36 shrink-0">
              <span className="text-sm font-semibold text-slate-200 block">
                {index === 0 ? 'Hoy' : item.dayName}
              </span>
              <span className="text-xs text-slate-400 capitalize truncate block">
                {item.condition.description}
              </span>
            </div>

            {/* Ícono de condición + Probabilidad de lluvia */}
            <div className="flex items-center gap-2 shrink-0">
              <WeatherIcon
                name={item.condition.iconName}
                className="h-6 w-6 text-blue-400"
              />
              {item.precipitationProbability > 0 ? (
                <span className="flex items-center gap-0.5 text-xs text-blue-400 w-12 font-medium">
                  <Droplets className="h-3 w-3" />
                  {item.precipitationProbability}%
                </span>
              ) : (
                <div className="w-12" aria-hidden="true" />
              )}
            </div>

            {/* Temperaturas Máxima y Mínima */}
            <div className="flex items-center gap-3 justify-end shrink-0 text-sm">
              <span className="font-bold text-slate-100 w-10 text-right">
                {item.maxTemperature}{symbols.temperature}
              </span>
              <span className="text-slate-400 w-10 text-right">
                {item.minTemperature}{symbols.temperature}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

```

---

### Puntos clave:

* **Sustitución contextual ("Hoy")**: Detecta el primer índice (`index === 0`) y renombra el día a `"Hoy"` para dar una mejor jerarquía de lectura visual.
* **Alineación de columnas mediante fijos de ancho (`w-10`, `w-12`)**: Asigna dimensiones fijas a los contenedores de probabilidad e íconos para garantizar que los valores numéricos se mantengan perfectamente alineados a lo largo de toda la lista.
* **Separadores sutiles**: Usa la utilidad `divide-y divide-slate-800/60` para delimitar cada fila sin recargar visualmente el diseño.


### Objetivo


##### presentar la proyección meteorológica a mediano plazo (7 días)
##### mediante una lista vertical estructurada que facilita la comparación rápida entre días

Proyección del Clima a 7 Días (Planificación Semanal)
Permite al usuario visualizar la tendencia de temperaturas y condiciones meteorológicas para los próximos días de forma resumida y legible de un solo vistazo vertical.

Diseño de Lista Vertical con Alineación Fija (Grid/Row Layout)
A diferencia del carrusel horizontal utilizado en HourlyForecast, este componente opta por un layout vertical (divide-y).
Emplea anchos fijos en las columnas (w-28, w-12, w-10) para mantener perfectamente alineados:

Nombre del día y descripción de la condición.
Ícono meteorológico y probabilidad de lluvia.
Rango térmico (Máxima y Mínima).


Jerarquía Visual en Temperaturas y Precipitaciones
Contraste térmico: Resalta la temperatura máxima en un tono más brillante y negrita (text-slate-100 font-bold), mientras que la mínima se atenúa (text-slate-400).
Espaciadores defensivos: Si no hay probabilidad de lluvia (precipitationProbability === 0), renderiza un contenedor vacío (w-12) para mantener la alineación estricta de las columnas de temperatura sin romper el layout.


Traducción Relativa de Fechas ("Hoy")
Reemplaza el nombre del día por "Hoy" en la primera posición (index === 0), mejorando la usabilidad y legibilidad de la tarjeta.


Consistencia de Unidades Globales (useUnit)
Accede al contexto de la aplicación para mostrar los símbolos de temperatura correspondientes (°C o °F) de manera uniforme con el resto de los componentes
    

```
[ Daily / Parent Page ] ──> daily: DailyForecastModel[]
                                   │
                                   ▼
[ DailyForecast.tsx ] ◄── useUnit() ──> symbols.temperature
        │
        ├─> Mapea lista (index === 0 ? "Hoy" : item.dayName)
        ├─> Renderiza Max/Min con contraste visual
        └─> Delegación de ícono ──> <WeatherIcon name={item.condition.iconName} />
```

# 21. 



### `src/presentation/components/UnitToggle.tsx`

Este componente implementa un selector visual estilo *segmented control* (píldora) para alternar entre los sistemas de unidades Métrico (°C, km/h) e Imperial (°F, mph). Consume directamente el estado del `UnitContext`.

```typescript
import React from 'react';
import { useUnit } from '@application/context/UnitContext';
import { UnitSystem } from '@domain/models/unit.model';

/**
 * Control desplegable/conmutador para alternar entre el sistema métrico e imperial.
 */
export const UnitToggle: React.FC = () => {
  const { unitSystem, setUnitSystem } = useUnit();

  const isMetric = unitSystem === 'metric';

  const handleToggle = (system: UnitSystem) => {
    if (unitSystem !== system) {
      setUnitSystem(system);
    }
  };

  return (
    <div 
      className="inline-flex items-center p-1 bg-slate-800/80 border border-slate-700/70 rounded-2xl backdrop-blur-md shadow-inner"
      role="group"
      aria-label="Selección de sistema de unidades"
    >
      <button
        type="button"
        onClick={() => handleToggle('metric')}
        className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
          isMetric
            ? 'bg-blue-500 text-white shadow-md shadow-blue-500/20'
            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/40'
        }`}
        aria-pressed={isMetric}
      >
        °C, km/h
      </button>

      <button
        type="button"
        onClick={() => handleToggle('imperial')}
        className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
          !isMetric
            ? 'bg-blue-500 text-white shadow-md shadow-blue-500/20'
            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/40'
        }`}
        aria-pressed={!isMetric}
      >
        °F, mph
      </button>
    </div>
  );
};

```

---

### Puntos clave:

* **Control de Accesibilidad (`WAI-ARIA`)**: Utiliza `role="group"` y el atributo `aria-pressed` para comunicar el estado activo a lectores de pantalla.
* **Transiciones de UI Fluidas**: Aplica micro-animaciones suaves con `transition-all duration-200` y resaltado con sombras (`shadow-blue-500/20`) sobre el botón activo.
* **Integración Limpia con `UnitContext**`: Llama a `setUnitSystem` provocando la re-evaluación automática de las llamadas al repositorio meteorológico en `useWeather`.



### Objetivos

Control de alternancia visual (Segmented Control / Switch) que permite al usuario conmutar de forma global entre el sistema métrico (°C, km/h) e imperial (°F, mph).


Disparador de Cambio de Estado Global (UnitContext)
Consume la función setUnitSystem expuesta por useUnit().
Al cambiar la selección, actualiza el estado centralizado del contexto
lo que desencadena de forma reactiva la re-evaluación y actualización del formato en componentes consumidores (CurrentWeatherCard, HourlyForecast, DailyForecast).


Control de Renders Redundantes (Guardia de Estado)
La función handleToggle evalúa if (unitSystem !== system) antes de despachar la acción.
Si el usuario hace clic en el botón que ya está activo, la función ignora el evento para evitar re-renderizados innecesarios del árbol de React.


Feedback Visual Inmediato y Estilo de Interruptor (Pill Button)
Aplica estilos condicionales basados en el estado booleano isMetric:

Opción activa: Resaltada con un fondo azul sólido (bg-blue-500 text-white shadow-md), indicando con claridad qué sistema está operando.
Opción inactiva: Mantiene un tono de texto tenue (text-slate-400) con transiciones suaves en hover.


Accesibilidad Semántica (A11y)

Sigue las buenas prácticas de componentes accesibles mediante atributos ARIA:
role="group" y aria-label="Selección de sistema de unidades" para agrupar conceptualmente los dos botones.
aria-pressed={isMetric} / aria-pressed={!isMetric} para comunicar el estado presionado/activo a lectores de pantalla.




## 22. 


### `src/App.tsx`

Este archivo es el punto de entrada principal y orquestador de la capa de presentación. Ensambla la estructura del tablero, inyecta el `UnitProvider` y conecta las acciones de búsqueda de ciudades con la consulta asíncrona del clima.

```typescript
import React from 'react';
import { UnitProvider } from '@application/context/UnitContext';
import { useWeather } from '@application/hooks/useWeather';
import { LocationModel } from '@domain/models/location.model';
import { SearchBar } from '@presentation/components/SearchBar';
import { CurrentWeatherCard } from '@presentation/components/CurrentWeatherCard';
import { HourlyForecast } from '@presentation/components/HourlyForecast';
import { DailyForecast } from '@presentation/components/DailyForecast';
import { UnitToggle } from '@presentation/components/UnitToggle';
import { CloudSun, RefreshCw, AlertCircle, MapPin } from 'lucide-react';

/**
 * Ubicación por defecto al iniciar la aplicación (Buenos Aires, Argentina).
 */
const DEFAULT_LOCATION: LocationModel = {
  id: 3435910,
  name: 'Buenos Aires',
  country: 'Argentina',
  region: 'Buenos Aires',
  displayName: 'Buenos Aires, Argentina',
  latitude: -34.6037,
  longitude: -58.3816,
};

/**
 * Contenido del tablero meteorológico principal.
 */
const WeatherDashboard: React.FC = () => {
  const {
    selectedLocation,
    setSelectedLocation,
    weather,
    isLoading,
    error,
    refetch,
  } = useWeather(DEFAULT_LOCATION);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-blue-500 selection:text-white pb-12">
      {/* Fondo con degradado ambiente */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
        {/* Encabezado Principal */}
        <header className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-blue-400">
              <CloudSun className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-100">
                Weather Dashboard
              </h1>
              <p className="text-xs text-slate-400">
                Pronóstico meteorológico de precisión
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <UnitToggle />
          </div>
        </header>

        {/* Buscador de Ciudades */}
        <section className="mb-8" aria-label="Búsqueda de ubicación">
          <SearchBar onSelectLocation={setSelectedLocation} />
        </section>

        {/* Panel Central de Estado o Contenido */}
        <main className="space-y-6">
          {/* Estado de Carga */}
          {isLoading && !weather && (
            <div className="flex flex-col items-center justify-center p-12 bg-slate-900/40 border border-slate-800 rounded-3xl backdrop-blur-md min-h-[300px]">
              <RefreshCw className="h-8 w-8 text-blue-400 animate-spin mb-3" />
              <p className="text-sm text-slate-400 font-medium">
                Cargando información del tiempo...
              </p>
            </div>
          )}

          {/* Estado de Error */}
          {error && !isLoading && (
            <div className="flex flex-col items-center justify-center p-8 bg-rose-950/20 border border-rose-900/30 rounded-3xl text-center">
              <AlertCircle className="h-10 w-10 text-rose-400 mb-3" />
              <h3 className="text-base font-semibold text-rose-200 mb-1">
                Ocurrió un inconveniente
              </h3>
              <p className="text-xs text-rose-300/80 max-w-md mb-4">
                {error}
              </p>
              <button
                type="button"
                onClick={() => refetch()}
                className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-300 rounded-xl text-xs font-semibold transition-colors"
              >
                <RefreshCw className="h-3.5 w-3.5" /> Reintentar
              </button>
            </div>
          )}

          {/* Estado Vacío (Sin Ciudad Seleccionada) */}
          {!selectedLocation && !isLoading && !error && (
            <div className="flex flex-col items-center justify-center p-12 bg-slate-900/40 border border-slate-800 rounded-3xl text-center">
              <MapPin className="h-10 w-10 text-slate-600 mb-3" />
              <p className="text-sm text-slate-400">
                Utiliza el buscador superior para consultar el clima de cualquier ciudad.
              </p>
            </div>
          )}

          {/* Visualización de Datos Meteorológicos */}
          {selectedLocation && weather && (
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* Tarjeta del Clima Actual */}
              <CurrentWeatherCard
                location={selectedLocation}
                current={weather.current}
              />

              {/* Pronóstico por Horas */}
              <HourlyForecast hourly={weather.hourly} />

              {/* Pronóstico de 7 Días */}
              <DailyForecast daily={weather.daily} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

/**
 * Componente Raíz que envuelve la aplicación en los proveedores de contexto necesarios.
 */
export default function App() {
  return (
    <UnitProvider>
      <WeatherDashboard />
    </UnitProvider>
  );
}

```

---

### Puntos clave:

1. **Gestión de Estados de la Interfaz**:
Maneja limpiamente los 4 estados principales de la aplicación: *Cargando* (`isLoading`), *Error* (`error`), *Sin Ubicación* y *Con Datos Rendereados* (`selectedLocation && weather`).
2. **Inyección de Dependencia Global (`UnitProvider`)**:
Encapsula todo el Dashboard dentro de `<UnitProvider>`, garantizando que el `SearchBar`, las tarjetas de clima y el selector de unidades compartan el mismo estado de unidades sin necesidad de prop-drilling.
3. **Ubicación Semilla (`DEFAULT_LOCATION`)**:
Mantiene una ubicación inicial configurada para que la interfaz muestre información meteorológica relevante inmediatamente al cargar la página por primera vez.

---


### Objetivo

orquestador principal y contenedor raíz de la aplicación
integrando el estado global de unidades
la gestión del estado asíncrono del clima y la composición de los layouts de UI.

##### Inyección de Proveedores Globales (UnitProvider)
El componente por defecto App envuelve toda la aplicación con <UnitProvider>,
garantizando que la configuración del sistema de unidades (metric o imperial) esté disponible en cualquier nivel del árbol de componentes.

Orquestación del Estado del Clima (useWeather)
##### Conecta la UI con la lógica de aplicación mediante el hook useWeather, inicializado con una ciudad por defecto (DEFAULT_LOCATION: Buenos Aires).

Gestiona:
La ubicación seleccionada (selectedLocation, setSelectedLocation).
El objeto de datos meteorológicos procesados (weather).
Los estados de carga (isLoading), error (error) y la función de reintento (refetch).

##### Manejo de Estados de UI (State Machine)

Condiciona la renderización de la interfaz en función del ciclo de vida de los datos:

Carga (isLoading): Muestra un spinner animado con un mensaje de espera.
Error (error): Despliega una tarjeta de alerta con la opción de reintentar la petición mediante refetch().
Estado Vacío: Renderiza un aviso amigable cuando no hay una ciudad seleccionada.
Éxito (weather): Monta la vista principal animada con la jerarquía completa (CurrentWeatherCard -> HourlyForecast -> DailyForecast).


Estructura y Shell de la Interfaz (Layout Principal)
Define el marco visual general:

Fondo con degradado radial dinámico y tipografía accesible.
Encabezado con la identidad visual (CloudSun), el título y el conmutador de unidades (UnitToggle).
Sección del buscador (SearchBar) que permite actualizar la ciudad activa en useWeather.    


```
				┌───────────────────────────────┐
               │          App (Root)           │
               └───────────────┬───────────────┘
                               │
                       <UnitProvider>
                               │
               ┌───────────────┴───────────────┐
               │       WeatherDashboard        │
               └───────────────┬───────────────┘
                               │
            ┌──────────────────┴──────────────────┐
            │ hook: useWeather(DEFAULT_LOCATION) │
            └──────────────────┬──────────────────┘
                               │
   ┌───────────────────────────┼───────────────────────────┐
   ▼                           ▼                           ▼
[ Header ]              [ SearchBar ]               [ Main Section ]
 ├─ CloudSun Logo        └─ onSelectLocation ─────────► (setSelectedLocation)
 └─ UnitToggle                                             │
                                   ┌───────────────────────┴───────────────────────┐
                                   ▼                                               ▼
                           { isLoading / error }                          { selectedLocation & weather }
                           ( Spinner / AlertCard )                                 │
                                                                   ┌───────────────┼───────────────┐
                                                                   ▼               ▼               ▼
                                                         [CurrentWeatherCard] [HourlyForecast] [DailyForecast]
```







# Poke api - Angular


1. Explorador Principal

Carga Inicial: Consulta de los primeros 151 Pokémon (Primera Generación) en una sola petición a la lista.
Virtual Scroll (@angular/cdk/scrolling): Renderizado fluido de las tarjetas en una cuadrícula o lista adaptable.
Tarjetas Pokémon: Muestra de ID (#001), nombre en mayúscula, imagen del sprite oficial y badges de tipo con colores dinámicos vía Tailwind.

2. Buscador y Filtro Dinámico

Búsqueda por Texto: Input para filtrar en tiempo real por nombre o número de ID sin hacer peticiones adicionales a la API.
Filtro de Favoritos: Botón alternador para cambiar la vista entre "Todos" y "Mis Favoritos".

3. Modal / Ficha de Detalle

Trigger: Al hacer clic en cualquier tarjeta, se abre un modal flotante.
Carga en Demanda: Petición HTTP al endpoint /pokemon/{id} (utilizando la caché en memoria si ya fue cargado).
Gráfico de Estadísticas: Radar Chart con Chart.js mapeando los 6 atributos base (HP, Attack, Defense, Special-Attack, Special-Defense, Speed).
Información Extra: Peso, altura, habilidades y arte oficial en alta resolución

4. Sistema de Favoritos (Persistencia)

Acción: Botón con icono de corazón (ng-icons) en la tarjeta y en el detalle.
Gestión con Signals: signal<number[]> que almacena el arreglo de IDs guardados.
Sincronización: effect() que guarda o remueve automáticamente los IDs en localStorage

```
src/app/
├── core/
│   ├── models/
│   │   └── pokemon.model.ts       # Tipados de la API y modelo local
│   └── services/
│       ├── pokemon.service.ts     # Peticiones HTTP y caché en memoria
│       └── favorites.service.ts   # Signals + LocalStorage
│
├── features/
│   └── pokemon/
│       ├── components/
│       │   ├── pokemon-card/      # Tarjeta individual
│       │   ├── pokemon-detail/    # Modal con Chart.js
│       │   └── pokemon-search/    # Barram de búsqueda
│       └── pages/
│           └── pokemon-page/      # Vista principal con CDK Virtual Scroll
│
└── shared/
    └── utils/
        └── pokemon-colors.ts      # Mapeo de tipos a clases Tailwind
```


### Por capas

```
			   ┌─────────────────────────────────────────┐
               │         Capa de Presentación            │
               │   (Componentes de UI / Plantillas)       │
               └────────────────────┬────────────────────┘
                                    │ Lee Signals / Dispara Eventos
                                    ▼
               ┌─────────────────────────────────────────┐
               │        Capa de Estado y Datos           │
               │   (Servicios: HTTP, Caché y Signals)    │
               └────────────────────┬────────────────────┘
                                    │ Define Estructuras
                                    ▼
               ┌─────────────────────────────────────────┐
               │            Capa de Dominio              │
               │    (Modelos e Interfaces TypeScript)    │
               └─────────────────────────────────────────┘
```


1. Capa de Dominio (models/)
Define qué es un Pokémon y los datos con los que trabaja la aplicación. Es código TypeScript puro sin dependencias de Angular.
pokemon.model.ts: Interfaces para las respuestas de la PokéAPI (lista, detalle, estadísticas) y el tipo del estado de filtros.

2. Capa de Datos y Estado (services/)
Contiene la lógica de negocio, las peticiones HTTP y el almacenamiento
Componentes no hacen peticiones HTTP directamente, siempre pasan por aquí.
pokemon.service.ts: Peticiones con HttpClient, caché en memoria (Map) y llamadas a endpoints de lista y detalle.
favorites.service.ts: Estado reactivo de favoritos usando signal(), persistiéndolo en localStorage con effect().

3. Capa de Presentación (components/)
La interfaz visual
Dividida en Componentes Tontos (Presentacionales) que solo reciben datos por @Input() y emiten eventos con @Output()
un Componente Contenedor (Smart) que orquesta la vista.

pokemon-card/ (Presentacional): Recibe un Pokémon y muestra la tarjeta básica con la imagen y sus tipos.
pokemon-search/ (Presentacional): Input de texto y filtro por tipo que notifica cambios al padre.
pokemon-detail/ (Presentacional): Modal emergente que renderiza los datos extendidos y el gráfico Radar de Chart.js.
pokemon-list/ (Contenedor / Página principal): Conecta los servicios con la interfaz, maneja el Virtual Scroll de Angular CDK y gestiona la apertura del modal


```

src/app/
├── models/
│   └── pokemon.model.ts          # Capa 1: Contratos de datos
│
├── services/
│   ├── pokemon.service.ts        # Capa 2: Peticiones API + Caché
│   └── favorites.service.ts      # Capa 2: Estado de Favoritos + LocalStorage
│
├── components/                   # Capa 3: UI
│   ├── pokemon-card/
│   ├── pokemon-search/
│   ├── pokemon-detail/
│   └── pokemon-list/             # Vista principal
│
└── utils/
    └── pokemon-colors.ts         # Mapeo de tipos a colores Tailwind
```



### Diseño Bottom-Up

1. Contratos de Datos (Dominio)
Antes de escribir lógica o vistas, definimos las interfaces y tipos en TypeScript
Esto establece la "forma" que tendrán los datos de la lista, el detalle de cada Pokémon, las estadísticas y los favoritos.
Otorga autocompletado y prevención de errores en todas las capas posteriores.

2. Utilidades Visuales Básicas (Mapeo de Estilos)
Un diccionario o mapa estático de datos que relacione los 18 tipos de Pokémon con sus correspondientes clases de color de Tailwind
Permite que cualquier componente visual pueda consultar los colores de tipo desde el primer instante sin repetir lógica

3. Servicios y Gestión de Estado (Datos)
Crear el servicio de comunicación con la PokéAPI (que maneja las peticiones HTTP y la memoria caché)
el servicio de favoritos (que administra la reactividad con Signals y la lectura/escritura en localStorage).
La lógica de datos debe estar lista y probada conceptualmente para que los componentes de interfaz solo tengan que "consumirla".

4. Componentes Presentacionales (UI)
Crear los bloques visuales aislados: la tarjeta individual (PokemonCard), la barra de búsqueda (PokemonSearch)
el modal emergente con el gráfico de estadísticas (PokemonDetail).
Son piezas independientes que no conocen el origen de los datos
solo reciben información y emiten acciones.

5. Componente Contenedor y Ensamblaje
Construir la vista principal (PokemonList)
integrando el Virtual Scroll de Angular CDK para renderizar las tarjetas
conectando los servicios creados en el paso 3 con los componentes del paso 4.



### Testing

1. Prioridad Máxima: Servicios (Capa de Estado y Datos)
Son funciones puras o clases de servicios sin dependencia del DOM
Alto retorno de inversión: garantizan que la lógica central funcione

FavoritesService (Signals + localStorage)

Agregar un Pokémon a favoritos lo incluye en el Signal.
Quitarlo lo elimina correctamente.
Al iniciar el servicio, lee correctamente los datos previos guardados en localStorage.
La sincronización no falla si localStorage está vacío o corrupto.

PokemonService (HttpClient + Caché en memoria)

Qué testear con HttpTestingController:
La llamada a la API transforma o devuelve la lista esperada.
Lógica de Caché: La primera llamada al detalle hace la petición HTTP; la segunda llamada con el mismo ID debe devolver el dato almacenado sin realizar una segunda petición HTTP.


2. Prioridad Media: Utilidades y Helper Functions
Funciones puras que transforman o formatean datos.

pokemon-colors.ts
Un tipo conocido (fire) devuelve las clases de Tailwind correctas (bg-red-500).
Un tipo desconocido o no definido devuelve una clase por defecto sin romper la app.


3. Prioridad Baja: Componentes Presentacionales (UI)
Aquí el objetivo es verificar que la interfaz responda a las entradas (Inputs) y notifique los eventos (Outputs).

PokemonCardComponent

Renderiza correctamente el nombre, ID e imagen recibidos mediante @Input().
Emitir el evento @Output() cuando el usuario hace clic en la tarjeta o en el botón de favorito.

PokemonSearchComponent
Al escribir en el input, emite el término de búsqueda actualizado



### Config proy


ng new pokedex-app --standalone --style=scss --ssr=false

cd pokedex-app

npm install -D tailwindcss postcss autoprefixer

npm install tailwindcss @tailwindcss/vite

npm install -D @types/node


#### Config files

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Directias tailw

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```


Angular CDK for Virtual Scroll

```
npm install @angular/cdk
```


Chart.js y ng2-charts

librería de gráficos y su adaptador para Angular

```
npm install chart.js ng2-charts
```


ng icons

```
npm install @ng-icons/core @ng-icons/heroicons
```


HttpClient globalmente
src/app/app.config.ts e incluye la función provideHttpClient() dentro del arreglo de providers para habilitar el cliente HTTP en toda la aplicación

```
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient() // <--- Agregar esta línea
  ]
};
```



# 1. poke model

Crea el archivo src/app/models/pokemon.model.ts:

```
// --- Respuesta de la API: Lista Principal ---

export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}

// --- Tipos para la tarjeta procesada ---

export interface PokemonCardData {
  id: number;
  name: string;
  imageUrl: string;
  url: string;
}

// --- Respuesta de la API: Detalle de Pokémon ---

export interface PokemonTypeInfo {
  name: string;
  url: string;
}

export interface PokemonType {
  slot: number;
  type: PokemonTypeInfo;
}

export interface PokemonStatInfo {
  name: string;
  url: string;
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: PokemonStatInfo;
}

export interface PokemonAbilityInfo {
  name: string;
  url: string;
}

export interface PokemonAbility {
  ability: PokemonAbilityInfo;
  is_hidden: boolean;
  slot: number;
}

export interface PokemonSprites {
  front_default: string;
  other?: {
    'official-artwork'?: {
      front_default: string;
    };
  };
}

export interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: PokemonSprites;
  types: PokemonType[];
  stats: PokemonStat[];
  abilities: PokemonAbility[];
}
```


### Uso


1. Fase de Carga Inicial (Petición HTTP)

En el instante en que ejecuta http.get() dentro de PokemonService.getPokemonList().
`this.http.get<PokemonListResponse>(...)`
Le indican a Angular exactamente qué forma tiene el JSON que viene desde la red para que TypeScript valide la respuesta


2. Fase de Transformación y Renderizado de Tarjetas

Se usan una vez que el servicio procesa la respuesta cruda
la convierte en objetos listos para la interfaz visual.

PokemonCardData:
Durante todo el ciclo de vida de la lista principal y el Virtual Scroll.

En PokemonService al mapear la lista
`(.map(item => transformToCardData(...)))`.

En PokemonListComponent para almacenar el Signal con todos los Pokémon
`(toSignal<PokemonCardData[]>)`.

En PokemonCardComponent mediante su entrada
`@Input() pokemon!: PokemonCardData`.

Función: Proporcionar a cada tarjeta su id, name e imageUrl sin sobrecargar la tarjeta con datos innecesarios de la API.


3. Fase de Detalle e Interacción (Modal)
Se usan cuando el usuario hace clic en una tarjeta para ver las estadísticas extendidas y el gráfico de Radar

PokemonDetail (y sus auxiliares: PokemonStat, PokemonType, PokemonAbility, PokemonSprites)
momento en que se solicita la información extendida de un Pokémon específico.

En PokemonService.getPokemonDetail() como tipo de retorno y como tipo guardado en el mapa de caché
`(Map<string | number, PokemonDetail>)`.

En PokemonListComponent en la señal
`selectedPokemon = signal<PokemonDetail null |>(null)`.

En PokemonDetailComponent mediante su entrada @Input()
`pokemon: PokemonDetail | null`.

Función: Extraer los arreglos de estadísticas para alimentar el objeto de datos de Chart.js y renderizar las insignias de tipos, peso, altura y arte oficial.

```
[ PokeAPI GET /pokemon ]
       │
       ▼
PokemonListResponse ──(Se mapea en PokemonService)──► PokemonCardData ──► PokemonCardComponent (UI)
                                                                │
                                                  (Clic en Tarjeta)
                                                                ▼
[ PokeAPI GET /pokemon/{id} ] ──► PokemonDetail ──► PokemonDetailComponent / Chart.js (Modal)
```



# 2. poke colors

mapear los 18 tipos de Pokémon a sus respectivos colores de Tailwind CSS (src/app/utils/pokemon-colors.ts).

Crea el archivo src/app/utils/pokemon-colors.ts:

```
export interface PokemonTypeColor {
  bg: string;
  text: string;
  border: string;
  badge: string;
}

export const POKEMON_TYPE_COLORS: Record<string, PokemonTypeColor> = {
  normal: {
    bg: 'bg-neutral-400',
    text: 'text-neutral-700',
    border: 'border-neutral-400',
    badge: 'bg-neutral-500 text-white'
  },
  fire: {
    bg: 'bg-amber-500',
    text: 'text-amber-700',
    border: 'border-amber-500',
    badge: 'bg-amber-600 text-white'
  },
  water: {
    bg: 'bg-blue-500',
    text: 'text-blue-700',
    border: 'border-blue-500',
    badge: 'bg-blue-600 text-white'
  },
  grass: {
    bg: 'bg-emerald-500',
    text: 'text-emerald-700',
    border: 'border-emerald-500',
    badge: 'bg-emerald-600 text-white'
  },
  electric: {
    bg: 'bg-yellow-400',
    text: 'text-yellow-700',
    border: 'border-yellow-400',
    badge: 'bg-yellow-500 text-neutral-900'
  },
  ice: {
    bg: 'bg-cyan-300',
    text: 'text-cyan-800',
    border: 'border-cyan-300',
    badge: 'bg-cyan-400 text-neutral-900'
  },
  fighting: {
    bg: 'bg-red-700',
    text: 'text-red-900',
    border: 'border-red-700',
    badge: 'bg-red-800 text-white'
  },
  poison: {
    bg: 'bg-purple-600',
    text: 'text-purple-800',
    border: 'border-purple-600',
    badge: 'bg-purple-700 text-white'
  },
  ground: {
    bg: 'bg-amber-700',
    text: 'text-amber-900',
    border: 'border-amber-700',
    badge: 'bg-amber-800 text-white'
  },
  flying: {
    bg: 'bg-indigo-400',
    text: 'text-indigo-800',
    border: 'border-indigo-400',
    badge: 'bg-indigo-500 text-white'
  },
  psychic: {
    bg: 'bg-pink-500',
    text: 'text-pink-700',
    border: 'border-pink-500',
    badge: 'bg-pink-600 text-white'
  },
  bug: {
    bg: 'bg-lime-500',
    text: 'text-lime-800',
    border: 'border-lime-500',
    badge: 'bg-lime-600 text-white'
  },
  rock: {
    bg: 'bg-stone-500',
    text: 'text-stone-800',
    border: 'border-stone-500',
    badge: 'bg-stone-600 text-white'
  },
  ghost: {
    bg: 'bg-violet-700',
    text: 'text-violet-900',
    border: 'border-violet-700',
    badge: 'bg-violet-800 text-white'
  },
  dragon: {
    bg: 'bg-indigo-700',
    text: 'text-indigo-900',
    border: 'border-indigo-700',
    badge: 'bg-indigo-800 text-white'
  },
  steel: {
    bg: 'bg-slate-400',
    text: 'text-slate-700',
    border: 'border-slate-400',
    badge: 'bg-slate-500 text-white'
  },
  fairy: {
    bg: 'bg-rose-300',
    text: 'text-rose-700',
    border: 'border-rose-300',
    badge: 'bg-rose-400 text-neutral-900'
  },
  dark: {
    bg: 'bg-neutral-800',
    text: 'text-neutral-900',
    border: 'border-neutral-800',
    badge: 'bg-neutral-900 text-white'
  }
};

const DEFAULT_COLOR: PokemonTypeColor = {
  bg: 'bg-gray-400',
  text: 'text-gray-700',
  border: 'border-gray-400',
  badge: 'bg-gray-500 text-white'
};

export function getPokemonTypeColor(type: string): PokemonTypeColor {
  return POKEMON_TYPE_COLORS[type.toLowerCase()] ?? DEFAULT_COLOR;
}
```


### Uso

```
// En PokemonDetailComponent
get mainTypeColor() {
  if (!this.pokemon || !this.pokemon.types.length) {
    return getPokemonTypeColor('normal');
  }
  // Retorna el objeto de colores para el primer tipo (ej: "fire")
  return getPokemonTypeColor(this.pokemon.types[0].type.name);
}
```



# 3. poke service

servicio principal de comunicación con la PokéAPI: src/app/services/pokemon.service.ts


Solicitar la lista inicial de Pokémon y transformarla en objetos con su id extraído y la URL directa de su imagen oficial.

Solicitar el detalle completo de un Pokémon.

Implementar un mapa en memoria (detailCache) para almacenar respuestas previas y evitar peticiones HTTP duplicadas.


src/app/services/pokemon.service.ts:

```
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of, tap } from 'rxjs';
import {
  PokemonCardData,
  PokemonDetail,
  PokemonListResponse
} from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private http = inject(HttpClient);
  private baseUrl = 'https://pokeapi.co/api/v2';

  // Caché en memoria para evitar descargas duplicadas
  private detailCache = new Map<string | number, PokemonDetail>();

  /**
   * Obtiene la lista básica de Pokémon y asigna a cada elemento su ID y
   * la URL directa de la imagen oficial (sin requerir peticiones adicionales).
   */
  getPokemonList(limit: number = 151, offset: number = 0): Observable<PokemonCardData[]> {
    return this.http
      .get<PokemonListResponse>(`${this.baseUrl}/pokemon?limit=${limit}&offset=${offset}`)
      .pipe(
        map((response) =>
          response.results.map((item) => this.transformToCardData(item.name, item.url))
        )
      );
  }

  /**
   * Obtiene la información detallada (estadísticas, tipos, peso, habilidades).
   * Si el Pokémon ya fue consultado antes, lo recupera al instante desde la caché.
   */
  getPokemonDetail(nameOrId: string | number): Observable<PokemonDetail> {
    const key = nameOrId.toString().toLowerCase();

    if (this.detailCache.has(key)) {
      return of(this.detailCache.get(key)!);
    }

    return this.http.get<PokemonDetail>(`${this.baseUrl}/pokemon/${key}`).pipe(
      tap((detail) => {
        this.detailCache.set(key, detail);
        this.detailCache.set(detail.id, detail);
      })
    );
  }

  /**
   * Extrae el ID numérico al final de la URL devuelta por la API (ej: ".../pokemon/1/")
   * y compone la URL directa de la imagen oficial alojada en GitHub.
   */
  private transformToCardData(name: string, url: string): PokemonCardData {
    const id = this.extractIdFromUrl(url);
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

    return {
      id,
      name,
      imageUrl,
      url
    };
  }

  private extractIdFromUrl(url: string): number {
    const segments = url.split('/').filter(Boolean);
    return parseInt(segments[segments.length - 1], 10);
  }
}
```

capa de acceso a datos (Data/Services Layer) de la aplicación
aislar toda la comunicación con la PokéAPI
transformar las respuestas crudas en formatos optimizados para la UI
acelerar el rendimiento mediante un sistema de caché en memoria.

Respons

1. Obtención y Transformación de la Lista
`(getPokemonList)`
Problema de la API original: El endpoint /pokemon?limit=151 solo devuelve el nombre del Pokémon y la URL de su detalle
sin enviar las imágenes ni los IDs.

Solución del servicio: Ejecuta la petición HTTP y usa el operador map de RxJS junto con transformToCardData() para
Extraer el ID numérico al final de la URL devuelta
(.../pokemon/25/ -> 25).
Construir directamente la URL de la imagen en alta resolución alojada en el CDN de GitHub de PokéAPI.

##### Impacto en Rendimiento: Pasa de requerir 152 peticiones HTTP (1 para la lista + 151 para cada imagen/detalle) a solo 1 petición HTTP para renderizar todo el grid inicial.

2. Gestión de Caché en Memoria (getPokemonDetail)
Usa una propiedad privada `detailCache = new Map<string | number, PokemonDetail>()`.

Antes de hacer un http.get(), verifica si el ID o nombre del Pokémon existe en detailCache.
Si existe: Usa el operador of() de RxJS para devolver inmediatamente los datos guardados en memoria sin tocar la red.
Si no existe: Hace la petición HTTP y usa tap() para guardar el resultado en el Map asociándolo tanto a su nombre como a su ID numérico

3. Métodos Privados Auxiliares

extractIdFromUrl():
Método utilitario que limpia la URL con .split('/') y .filter(Boolean) para obtener de forma segura el ID numérico del recurso.

transformToCardData():
Convierte un elemento crudo de la API en el objeto DTO PokemonCardData que consume directamente la tarjeta de la interfaz.


### Uso del service

##### se consume principalmente desde el componente contenedor PokemonListComponent
`src/app/components/pokemon-list/pokemon-list.component.ts`

1. Carga Inicial de la Lista (toSignal)
Se inyecta en el componente contenedor
y se combina con la utilidad toSignal de Angular
para convertir el flujo observable en un Signal reactivo de solo lectura.

```
// En PokemonListComponent:
private pokemonService = inject(PokemonService);

// Se suscribe automáticamente y mantiene el listado en memoria
readonly allPokemon = toSignal(this.pokemonService.getPokemonList(151, 0), {
  initialValue: [] as PokemonCardData[]
});
```

Uso: Al iniciar la aplicación, ejecuta la petición a la PokéAPI, extrae los IDs, compone las URLs de las imágenes
provee los datos para alimentar el Virtual Scroll y los filtros de búsqueda.


2. Carga Bajo Demanda para el Modal (getPokemonDetail)
Se invoca de forma diferida únicamente cuando el usuario interactúa con una tarjeta de la lista.

```
// En PokemonListComponent:
onSelectPokemon(id: number): void {
  this.isLoadingDetail.set(true);

  this.pokemonService.getPokemonDetail(id).subscribe({
    next: (detail) => {
      this.selectedPokemon.set(detail); // Pasa los datos al modal y Chart.js
      this.isLoadingDetail.set(false);
    },
    error: () => this.isLoadingDetail.set(false)
  });
}
```
Solicita peso, altura, tipos y las 6 estadísticas base necesarias para construir el gráfico de Radar en PokemonDetailComponent.


3. Interceptación y Reutilización vía Caché en Memoria
Aunque el componente solicita el detalle cada vez que el usuario hace clic
el servicio gestiona internamente si la petición debe salir a la red o no:

```
// Dentro de PokemonService:
if (this.detailCache.has(key)) {
  return of(this.detailCache.get(key)!); // Retorno instantáneo O(1)
}
```

Si el usuario abre a Pikachu, cierra el modal y lo vuelve a abrir minutos después
PokemonService responde inmediatamente con la copia guardada en su Map
evitando peticiones HTTP redundantes a la PokéAPI.



### Debounce con signals

```
import { Component, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime } from 'rxjs';

@Component({ ... })
export class SearchSignalComponent {
  // Signal de entrada inmediata
  searchTerm = signal('');

  // Signal debouncada que se actualiza 300ms después de que searchTerm se estabiliza
  debouncedSearchTerm = toSignal(
    toObservable(this.searchTerm).pipe(debounceTime(300)),
    { initialValue: '' }
  );

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);
  }
}
```



### debounce y pokeapi

Búsqueda remota (Buscador global +1000 Pokémon)
petición HTTP directa por término
Impide enviar peticiones HTTP duplicadas/fallidas a la PokéAPI y evita sobrepasar el rate limit.

Cuando se consulta la API de forma remota en tiempo real, se combina debounceTime con switchMap (el cual cancela peticiones HTTP pendientes si el usuario vuelve a escribir):

```
this.searchInput.valueChanges.pipe(
  debounceTime(300),          // 1. Espera 300ms de calma
  distinctUntilChanged(),     // 2. Continúa solo si la búsqueda cambió
  switchMap(term =>           // 3. Cancela la petición anterior si hay una nueva en vuelo
    this.pokemonService.getPokemonDetail(term)
  )
).subscribe({
  next: (pokemon) => this.showDetail(pokemon),
  error: (err) => console.log('Pokémon no encontrado')
});
```




# 4. poke fav

servicio de gestión de estado para los favoritos: src/app/services/favorites.service.ts.

Mantener la lista de IDs de Pokémon favoritos en un Signal reactivo.
Sincronizar automáticamente cualquier cambio en localStorage usando un effect().
Exponer métodos sencillos para agregar, eliminar o consultar si un Pokémon es favorito en tiempo constante $O(1)$ gracias a un computed().

archivo src/app/services/favorites.service.ts:

```
import { Injectable, signal, effect, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private readonly STORAGE_KEY = 'pokedex_favorites';

  // Signal privado con el arreglo de IDs guardados
  private favoriteIdsSignal = signal<number[]>(this.loadFromStorage());

  // Signal público de solo lectura para ser consumido por los componentes
  readonly favoriteIds = this.favoriteIdsSignal.asReadonly();

  // Set derivado para búsquedas instantáneas O(1) en plantillas
  private favoriteSet = computed(() => new Set(this.favoriteIdsSignal()));

  constructor() {
    // Sincroniza automáticamente los cambios del Signal con localStorage
    effect(() => {
      this.saveToStorage(this.favoriteIdsSignal());
    });
  }

  /**
   * Revisa si un ID de Pokémon está en la lista de favoritos.
   */
  isFavorite(id: number): boolean {
    return this.favoriteSet().has(id);
  }

  /**
   * Alterna un Pokémon entre guardado o eliminado de favoritos.
   */
  toggleFavorite(id: number): void {
    this.favoriteIdsSignal.update((currentIds) => {
      if (currentIds.includes(id)) {
        return currentIds.filter((favId) => favId !== id);
      } else {
        return [...currentIds, id];
      }
    });
  }

  private loadFromStorage(): number[] {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  private saveToStorage(ids: number[]): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(ids));
    } catch (error) {
      console.error('Error guardando favoritos en localStorage:', error);
    }
  }
}
```

##### gestionar el estado global de los Pokémon marcados como favoritos de forma totalmente reactiva y persistente a través de Angular Signals y LocalStorage

Mecanismos Clave y Prácticas de Angular Moderno

1. Encapsulamiento del Estado (signal + asReadonly)

```
private favoriteIdsSignal = signal<number[]>(this.loadFromStorage());
readonly favoriteIds = this.favoriteIdsSignal.asReadonly();
```

Estado privado: Mantiene un arreglo numérico con los IDs guardados ([1, 4, 25]), inicializado desde localStorage.
Seguridad de lectura: Expone únicamente favoriteIds como solo lectura mediante .asReadonly(). Ningún componente externo puede mutar la lista directamente sin pasar por las reglas del servicio.


2. Sincronización Automática mediante effect()

```
constructor() {
  effect(() => {
    this.saveToStorage(this.favoriteIdsSignal());
  });
}
```

Persistencia sin boilerplate: Angular ejecuta el efecto de forma automática cada vez que el valor de favoriteIdsSignal cambia
Esto elimina la necesidad de llamar manualmente a saveToStorage() en cada método de inserción o borrado.


3. Optimización de Búsqueda $O(1)$ con computed() y Set

```
private favoriteSet = computed(() => new Set(this.favoriteIdsSignal()));

isFavorite(id: number): boolean {
  return this.favoriteSet().has(id);
}
```

Búsqueda en tiempo constante: Si se buscara en el arreglo tradicional mediante Array.includes(), la complejidad sería O(n) por cada tarjeta en pantalla.
Al derivar automáticamente un Set usando computed(), la verificación de si un Pokémon es favorito dentro del Virtual Scroll se realiza en tiempo constante $O(1)$, garantizando 60 FPS en la interfaz.


4. Mutación Inmutable con update()

```
toggleFavorite(id: number): void {
  this.favoriteIdsSignal.update((currentIds) => {
    if (currentIds.includes(id)) {
      return currentIds.filter((favId) => favId !== id);
    } else {
      return [...currentIds, id];
    }
  });
}
```

Usa el método .update() de Signals para devolver un nuevo arreglo en lugar de modificar la referencia existente, lo que activa de forma limpia la detección de cambios OnPush en los componentes.


1. PokemonListComponent:
Se inyecta para calcular el Signal derivado filteredPokemon.
Si el usuario activa la casilla "Solo Favoritos", filtra la lista contrastando cada ID con favoritesService.isFavorite(p.id).

2. PokemonCardComponent:
Recibe la propiedad [isFavorite] para determinar si muestra el icono de corazón relleno (heroHeartFill) o delineado (heroHeart).

3. PokemonDetailComponent:
Permite marcar o desmarcar como favorito al Pokémon que se está inspeccionando directamente desde la cabecera del modal.




    

# 5. poke ui 1: tarjeta individual

src/app/components/pokemon-card/pokemon-card.component.ts.

##### solo recibe información vía @Input(), emite acciones del usuario mediante @Output() e implementa estilos adaptativos con Tailwind CSS.

```
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroHeartSolid, heroHeart } from '@ng-icons/heroicons/outline';
import { heroHeartSolid as heroHeartFill } from '@ng-icons/heroicons/solid';
import { PokemonCardData } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [TitleCasePipe, NgIconComponent],
  providers: [provideIcons({ heroHeart, heroHeartFill })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      (click)="onCardClick()"
      class="group relative bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer overflow-hidden transform hover:-translate-y-1 flex flex-col items-center"
    >
      <!-- Botón de Favorito -->
      <button
        type="button"
        (click)="onFavoriteClick($event)"
        class="absolute top-3 right-3 p-2 rounded-full bg-slate-50 hover:bg-rose-50 transition-colors z-10"
        [attr.aria-label]="isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'"
      >
        @if (isFavorite) {
          <ng-icon name="heroHeartFill" class="text-xl text-rose-500 animate-pulse"></ng-icon>
        } @else {
          <ng-icon name="heroHeart" class="text-xl text-slate-400 group-hover:text-rose-400"></ng-icon>
        }
      </button>

      <!-- Número de Pokedex (#001) -->
      <span class="text-xs font-bold text-slate-400 self-start">
        #{{ pokemon.id.toString().padStart(3, '0') }}
      </span>

      <!-- Imagen del Pokémon con lazy loading y escala al pasar el ratón -->
      <div class="w-32 h-32 my-2 flex items-center justify-center relative">
        <img
          [src]="pokemon.imageUrl"
          [alt]="pokemon.name"
          loading="lazy"
          class="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <!-- Nombre del Pokémon -->
      <h3 class="text-lg font-bold text-slate-800 group-hover:text-red-600 transition-colors">
        {{ pokemon.name | titlecase }}
      </h3>
    </div>
  `
})
export class PokemonCardComponent {
  @Input({ required: true }) pokemon!: PokemonCardData;
  @Input() isFavorite: boolean = false;

  @Output() cardClick = new EventEmitter<number>();
  @Output() toggleFavorite = new EventEmitter<number>();

  onCardClick(): void {
    this.cardClick.emit(this.pokemon.id);
  }

  onFavoriteClick(event: MouseEvent): void {
    event.stopPropagation(); // Evita abrir el modal al hacer clic solo en el corazón
    this.toggleFavorite.emit(this.pokemon.id);
  }
}
```

encargándose exclusivamente de renderizar la tarjeta individual de un Pokémon en la interfaz gráfica.
no depender de ningún servicio global ni realizar peticiones HTTP directamente

1. Patrón Presentacional (@Input / @Output)

@Input({ required: true }) pokemon: Recibe el objeto DTO PokemonCardData (id, name, imageUrl) generado por el PokemonService.
@Input() isFavorite: Recibe el estado booleano para saber si debe pintar el corazón relleno o solo el contorno.
@Output() cardClick: Notifica al padre cuando el usuario quiere abrir el modal de detalle enviando el id.
@Output() toggleFavorite: Notifica al padre cuando el usuario pulsa sobre la insignia de favorito.


2. Detención de la Propagación de Eventos (stopPropagation)

```
onFavoriteClick(event: MouseEvent): void {
  event.stopPropagation(); // Evita que el clic en el corazón dispare el clic de la tarjeta completa
  this.toggleFavorite.emit(this.pokemon.id);
}
```

Problema común en UI: El botón de favorito reside dentro del <div> principal de la tarjeta.
Un clic en el botón activaría por defecto también el clic del contenedor (abriendo el modal de detalle).

Solución: event.stopPropagation() detiene el borboteo (bubbling) del evento DOM para que la acción de guardar como favorito sea completamente independiente de la apertura del modal

3. Optimización para Alto Rendimiento (OnPush + lazy)
ChangeDetectionStrategy.OnPush: Le indica a Angular que no vuelva a evaluar la plantilla de esta tarjeta durante los ciclos de detección de cambios globales, a menos que cambie una de sus referencias @Input() o el usuario interactúe directamente con ella.
Esto es vital para mantener 60 FPS dentro del Virtual Scroll
    
loading="lazy": Atrasa la descarga de las imágenes de las tarjetas que quedan fuera de la pantalla inicial hasta que el usuario hace scroll hacia ellas.

4. Formato Visual y Microinteracciones
Pokédex ID: Normaliza los IDs con .padStart(3, '0') para mostrar el formato clásico de tres dígitos (#001, #025, #151).
TitleCasePipe: Convierte nombres en minúsculas enviados por la PokéAPI ("bulbasaur") a formato capitalizado ("Bulbasaur").
Tailwind CSS Group Hover: Utiliza la clase group en el contenedor principal para coordinar efectos sutiles al pasar el cursor (la tarjeta sube -translate-y-1, la imagen se amplía scale-110 y el título cambia a rojo).



# 6. búsqueda y filtrado

src/app/components/pokemon-search/pokemon-search.component.ts.

expone un campo de texto para filtrar Pokémon por nombre o ID
incluye un botón conmutador para alternar la vista entre la Pokédex completa y la lista de favoritos.

```
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroMagnifyingGlass, heroHeart } from '@ng-icons/heroicons/outline';
import { heroHeartSolid as heroHeartFill } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-pokemon-search',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ heroMagnifyingGlass, heroHeart, heroHeartFill })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex flex-col sm:flex-row items-center gap-4 w-full max-w-3xl mx-auto mb-8">
      <!-- Input de búsqueda por nombre o ID -->
      <div class="relative flex-1 w-full">
        <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
          <ng-icon name="heroMagnifyingGlass" class="text-xl"></ng-icon>
        </div>
        <input
          type="text"
          [value]="searchTerm"
          (input)="onSearchInput($event)"
          placeholder="Buscar Pokémon por nombre o número (#)..."
          class="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
        />
      </div>

      <!-- Botón conmutador para filtrar solo Favoritos -->
      <button
        type="button"
        (click)="onToggleFavorites()"
        class="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-semibold transition-all shadow-sm border"
        [class]="
          showOnlyFavorites
            ? 'bg-rose-500 text-white border-rose-500 shadow-rose-200 hover:bg-rose-600'
            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
        "
      >
        @if (showOnlyFavorites) {
          <ng-icon name="heroHeartFill" class="text-xl"></ng-icon>
          <span>Ver Todos</span>
        } @else {
          <ng-icon name="heroHeart" class="text-xl text-rose-500"></ng-icon>
          <span>Solo Favoritos</span>
        }
      </button>
    </div>
  `
})
export class PokemonSearchComponent {
  @Input() searchTerm: string = '';
  @Input() showOnlyFavorites: boolean = false;

  @Output() searchChange = new EventEmitter<string>();
  @Output() toggleFavorites = new EventEmitter<boolean>();

  onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchChange.emit(input.value);
  }

  onToggleFavorites(): void {
    this.toggleFavorites.emit(!this.showOnlyFavorites);
  }
}
```

proveer la interfaz de filtrado (barra de búsqueda de texto y botón conmutador de favoritos) de forma aislada
desacoplada de la lógica de filtrado o del estado de la aplicación.

sabe cómo se filtran los Pokémon ni guarda variables de estado internas;
simplemente reacciona a lo que el usuario escribe o presiona y lo notifica hacia arriba


1. Flujo de Datos Unidireccional (@Input / @Output)

@Input() searchTerm: Recibe el término de búsqueda actual del componente padre (PokemonListComponent).
@Input() showOnlyFavorites: Recibe el estado booleano para saber si el filtro de favoritos está activo o no.
@Output() searchChange: Emite una cadena de texto cada vez que el usuario escribe en el campo de entrada (onSearchInput).
@Output() toggleFavorites: Emite un valor booleano invertido (!showOnlyFavorites) al presionar el botón de favoritos (onToggleFavorites).

2. Eventos Nativos del DOM ((input))

```
onSearchInput(event: Event): void {
  const input = event.target as HTMLInputElement;
  this.searchChange.emit(input.value);
}
```

En lugar de depender de FormsModule ([(ngModel)]), el componente extrae el valor directamente del evento nativo del DOM (input).
Esto mantiene la plantilla liviana y permite al componente padre delegar la reacción al cambio (donde luego se puede aplicar un debounce si se desea).

3. Sintaxis de Control de Flujo de Angular (@if / @else)

Utiliza el nuevo bloque de control de flujo nativo de Angular (@if y @else) para alternar la etiqueta y el icono del botón de favoritos de manera declarativa:

```
@if (showOnlyFavorites) {
  <ng-icon name="heroHeartFill" class="text-xl"></ng-icon>
  <span>Ver Todos</span>
} @else {
  <ng-icon name="heroHeart" class="text-xl text-rose-500"></ng-icon>
  <span>Solo Favoritos</span>
}
```

4. Estilos Dinámicos y Adaptabilidad (Tailwind CSS)

Ajuste Responsivo: Utiliza flex-col sm:flex-row para apilar la barra de búsqueda y el botón verticalmente en dispositivos móviles
alinearlos horizontalmente en pantallas medianas o superiores (sm:).

[class] Binding Dinámico: Alterna las clases de Tailwind del botón entre un fondo rosa destacado (bg-rose-500 text-white)
cuando está activo, y un estilo blanco neutral (bg-white text-slate-700) cuando está inactivo.

5. Rendimiento Optimizado (OnPush)
Al utilizar ChangeDetectionStrategy.OnPush, Angular solo evaluará la plantilla del buscador cuando la referencia de searchTerm o showOnlyFavorites
cambie en el padre, o cuando el usuario escriba o haga clic en sus controles nativos



# 7. Modal detalles de button

Este componente muestra la información extendida del Pokémon (altura, peso, habilidades, tipos)
renderiza sus 6 estadísticas base en un gráfico Radar (telaraña) usando Chart.js (ng2-charts).

src/app/components/pokemon-detail/pokemon-detail.component.ts

```
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy
} from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import {
  Chart,
  ChartConfiguration,
  ChartData,
  ChartType,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroXMark, heroHeart } from '@ng-icons/heroicons/outline';
import { heroHeartSolid as heroHeartFill } from '@ng-icons/heroicons/solid';

import { PokemonDetail } from '../../models/pokemon.model';
import { getPokemonTypeColor } from '../../utils/pokemon-colors';

// Registrar los módulos de Chart.js necesarios para el gráfico de Radar
Chart.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [TitleCasePipe, BaseChartDirective, NgIconComponent],
  providers: [provideIcons({ heroXMark, heroHeart, heroHeartFill })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (pokemon) {
      <!-- Backdrop del modal -->
      <div
        class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto animate-fadeIn"
        (click)="onClose()"
      >
        <!-- Contenido del modal -->
        <div
          class="relative bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden my-8"
          (click)="$event.stopPropagation()"
        >
          <!-- Cabecera con color dinámico según el tipo principal -->
          <div
            class="p-6 text-white flex justify-between items-start relative overflow-hidden"
            [class]="mainTypeColor.bg"
          >
            <div>
              <span class="text-white/80 font-bold text-sm">
                #{{ pokemon.id.toString().padStart(3, '0') }}
              </span>
              <h2 class="text-3xl font-extrabold capitalize text-white drop-shadow-sm">
                {{ pokemon.name }}
              </h2>
              
              <!-- Insignias de Tipos -->
              <div class="flex gap-2 mt-2">
                @for (item of pokemon.types; track item.type.name) {
                  <span
                    class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-white backdrop-blur-md"
                  >
                    {{ item.type.name }}
                  </span>
                }
              </div>
            </div>

            <!-- Botones de Acción: Favorito y Cerrar -->
            <div class="flex items-center gap-2">
              <button
                type="button"
                (click)="onToggleFavorite()"
                class="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                [attr.aria-label]="isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'"
              >
                @if (isFavorite) {
                  <ng-icon name="heroHeartFill" class="text-2xl text-rose-300"></ng-icon>
                } @else {
                  <ng-icon name="heroHeart" class="text-2xl text-white"></ng-icon>
                }
              </button>

              <button
                type="button"
                (click)="onClose()"
                class="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                aria-label="Cerrar modal"
              >
                <ng-icon name="heroXMark" class="text-2xl"></ng-icon>
              </button>
            </div>
          </div>

          <!-- Cuerpo del Modal -->
          <div class="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
            <!-- Imagen oficial en alta resolución -->
            <div class="flex justify-center -mt-16 relative z-10">
              <img
                [src]="
                  pokemon.sprites.other?.['official-artwork']?.front_default ||
                  pokemon.sprites.front_default
                "
                [alt]="pokemon.name"
                class="w-44 h-44 object-contain drop-shadow-xl"
              />
            </div>

            <!-- Datos físicos (Peso, Altura, Habilidades) -->
            <div class="grid grid-cols-3 gap-4 text-center bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div>
                <p class="text-xs text-slate-400 font-medium">Altura</p>
                <p class="text-base font-bold text-slate-700">{{ pokemon.height / 10 }} m</p>
              </div>
              <div>
                <p class="text-xs text-slate-400 font-medium">Peso</p>
                <p class="text-base font-bold text-slate-700">{{ pokemon.weight / 10 }} kg</p>
              </div>
              <div>
                <p class="text-xs text-slate-400 font-medium">Habilidades</p>
                <p class="text-xs font-bold text-slate-700 capitalize truncate">
                  {{ mainAbility }}
                </p>
              </div>
            </div>

            <!-- Gráfico Radar de Estadísticas Base -->
            <div>
              <h3 class="text-sm font-bold text-slate-800 mb-2 text-center uppercase tracking-wider">
                Estadísticas Base
              </h3>
              <div class="relative h-64 w-full flex justify-center items-center">
                <canvas
                  baseChart
                  [data]="radarChartData"
                  [options]="radarChartOptions"
                  [type]="radarChartType"
                ></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
  `
})
export class PokemonDetailComponent implements OnChanges {
  @Input() pokemon: PokemonDetail | null = null;
  @Input() isFavorite: boolean = false;

  @Output() closeDetail = new EventEmitter<void>();
  @Output() toggleFavorite = new EventEmitter<number>();

  // Configuración de Chart.js
  radarChartType: ChartType = 'radar';
  
  radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      r: {
        angleLines: { color: 'rgba(203, 213, 225, 0.5)' },
        grid: { color: 'rgba(203, 213, 225, 0.5)' },
        pointLabels: {
          font: { size: 11, weight: 'bold' },
          color: '#475569'
        },
        ticks: { display: false, stepSize: 30 },
        suggestedMin: 0,
        suggestedMax: 150
      }
    }
  };

  radarChartData: ChartData<'radar'> = {
    labels: ['HP', 'Ataque', 'Defensa', 'At. Esp.', 'Def. Esp.', 'Velocidad'],
    datasets: []
  };

  get mainTypeColor() {
    if (!this.pokemon || !this.pokemon.types.length) {
      return getPokemonTypeColor('normal');
    }
    return getPokemonTypeColor(this.pokemon.types[0].type.name);
  }

  get mainAbility(): string {
    if (!this.pokemon || !this.pokemon.abilities.length) return 'N/A';
    return this.pokemon.abilities[0].ability.name.replace('-', ' ');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pokemon'] && this.pokemon) {
      this.updateChartData();
    }
  }

  onClose(): void {
    this.closeDetail.emit();
  }

  onToggleFavorite(): void {
    if (this.pokemon) {
      this.toggleFavorite.emit(this.pokemon.id);
    }
  }

  private updateChartData(): void {
    if (!this.pokemon) return;

    // Extraer los 6 valores de stats en orden
    const statsMap: Record<string, number> = {};
    this.pokemon.stats.forEach((s) => {
      statsMap[s.stat.name] = s.base_stat;
    });

    const values = [
      statsMap['hp'] || 0,
      statsMap['attack'] || 0,
      statsMap['defense'] || 0,
      statsMap['special-attack'] || 0,
      statsMap['special-defense'] || 0,
      statsMap['speed'] || 0
    ];

    this.radarChartData = {
      labels: ['HP', 'Ataque', 'Defensa', 'At. Esp.', 'Def. Esp.', 'Velocidad'],
      datasets: [
        {
          data: values,
          label: this.pokemon.name,
          backgroundColor: 'rgba(239, 68, 68, 0.2)',
          borderColor: 'rgba(239, 68, 68, 1)',
          pointBackgroundColor: 'rgba(239, 68, 68, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(239, 68, 68, 1)'
        }
      ]
    };
  }
}
```

##### vista detallada e interactiva de un Pokémon seleccionado dentro de un modal superpuesto (backdrop),
##### destacando sus atributos físicos, tipos, habilidades y una visualización gráfica en forma de Radar (telaraña) de sus 6 estadísticas base mediante Chart.js (ng2-charts).


Responsabilidades Clave y Mecanismos Internos

1. Registro y Configuración de Chart.js (ng2-charts)
Para mantener el bundle liviano mediante tree-shaking, se registran únicamente los módulos de Chart.js necesarios para un gráfico Radar fuera del componente:

```
Chart.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
```

Eje del Radar: Configurado con RadialLinearScale y escalado sugerido de 0 a 150 para comparar equitativamente los stats de cualquier Pokémon.
Directiva: Usa BaseChartDirective en el HTML y se alimenta dinámicamente mediante la propiedad radarChartData.


2. Actualización Reactiva con OnChanges
Dado que los datos del Pokémon llegan como @Input() pokemon, el componente implementa la interfaz OnChanges:

```
ngOnChanges(changes: SimpleChanges): void {
  if (changes['pokemon'] && this.pokemon) {
    this.updateChartData();
  }
}
```

Función updateChartData(): Transforma el arreglo pokemon.stats devuelto por PokéAPI en una tabla clave-valor (statsMap) y mapea los 6 valores exactos
(hp, attack, defense, special-attack, special-defense, speed) en el orden que exige el gráfico Radar.


3. Control de Eventos del Modal y Propagación

Cierre por Backdrop: El contenedor exterior captura el clic en la zona oscura (click)="onClose()".
Protección del Contenido: El modal interno aplica (click)="$event.stopPropagation()" para evitar que los clics dentro de la tarjeta cierren el modal involuntariamente.


4. Transformación de Datos e Integración de EstilosConversión de Unidades: PokéAPI entrega la altura en decímetros y el peso en hectogramos.

El componente los convierte a metros (height / 10) y kilogramos (weight / 10).
Normalización de Texto: La propiedad mainAbility reemplaza guiones por espacios ("lightning-rod" $\rightarrow$ "lightning rod") para legibilidad.
Cabecera Dinámica (mainTypeColor): Consulta getPokemonTypeColor() para asignar el color de fondo Tailwind (bg-amber-500, bg-blue-500, etc.) según el tipo primario del Pokémon.    




# 8. Contenedor principal

une todos los servicios y componentes creados previamente
Maneja los estados reactivos con Signals, calcula las listas filtradas mediante computed(),
agrupa los Pokémon en filas para el Virtual Scroll de Angular CDK y gestiona el ciclo de vida del modal de detalle.

src/app/components/pokemon-list/pokemon-list.component.ts.

```
import { Component, inject, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CdkVirtualScrollViewport, ScrollingModule } from '@angular/cdk/scrolling';

import { PokemonService } from '../../services/pokemon.service';
import { FavoritesService } from '../../services/favorites.service';
import { PokemonCardData, PokemonDetail } from '../../models/pokemon.model';

import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { PokemonSearchComponent } from '../pokemon-search/pokemon-search.component';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [
    ScrollingModule,
    PokemonCardComponent,
    PokemonSearchComponent,
    PokemonDetailComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <!-- Encabezado de la Pokédex -->
      <header class="max-w-3xl mx-auto text-center mb-8">
        <h1 class="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight">
          Pokédex <span class="text-red-600">Angular</span>
        </h1>
        <p class="text-slate-500 mt-2 text-sm sm:text-base">
          Explora los primeros 151 Pokémon construidos con Signals, Tailwind CSS y Chart.js
        </p>
      </header>

      <!-- Componente de Búsqueda y Filtros -->
      <app-pokemon-search
        [searchTerm]="searchTerm()"
        [showOnlyFavorites]="showOnlyFavorites()"
        (searchChange)="onSearchChange($event)"
        (toggleFavorites)="onToggleFavorites($event)"
      />

      <!-- Mensaje cuando no hay resultados -->
      @if (filteredPokemon().length === 0) {
        <div class="text-center py-16 bg-white rounded-3xl max-w-xl mx-auto border border-slate-100 shadow-sm">
          <p class="text-lg font-bold text-slate-700">No se encontraron Pokémon</p>
          <p class="text-sm text-slate-400 mt-1">
            Intenta cambiar el término de búsqueda o desactivar el filtro de favoritos.
          </p>
        </div>
      } @else {
        <!-- CDK Virtual Scroll Viewport -->
        <div class="max-w-5xl mx-auto h-[calc(100vh-280px)] min-h-[500px]">
          <cdk-virtual-scroll-viewport itemSize="220" class="h-full w-full pr-2">
            <!-- Renderizado agrupado por filas para simular cuadrícula en Virtual Scroll -->
            <div
              *cdkVirtualFor="let row of pokemonRows()"
              class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-4"
            >
              @for (pokemon of row; track pokemon.id) {
                <app-pokemon-card
                  [pokemon]="pokemon"
                  [isFavorite]="favoritesService.isFavorite(pokemon.id)"
                  (cardClick)="onSelectPokemon($event)"
                  (toggleFavorite)="favoritesService.toggleFavorite($event)"
                />
              }
            </div>
          </cdk-virtual-scroll-viewport>
        </div>
      }

      <!-- Indicador de Carga para el Modal -->
      @if (isLoadingDetail()) {
        <div class="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 flex items-center justify-center">
          <div class="bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
            <div class="w-8 h-8 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
            <span class="font-bold text-slate-700">Cargando datos del Pokémon...</span>
          </div>
        </div>
      }

      <!-- Modal de Detalle con Chart.js -->
      <app-pokemon-detail
        [pokemon]="selectedPokemon()"
        [isFavorite]="selectedPokemon() ? favoritesService.isFavorite(selectedPokemon()!.id) : false"
        (closeDetail)="onCloseDetail()"
        (toggleFavorite)="favoritesService.toggleFavorite($event)"
      />
    </main>
  `
})
export class PokemonListComponent {
  private pokemonService = inject(PokemonService);
  readonly favoritesService = inject(FavoritesService);

  // 1. Cargar los 151 Pokémon iniciales y convertirlos a Signal
  readonly allPokemon = toSignal(this.pokemonService.getPokemonList(151, 0), {
    initialValue: [] as PokemonCardData[]
  });

  // 2. Signals locales para los controles de búsqueda y modal
  readonly searchTerm = signal<string>('');
  readonly showOnlyFavorites = signal<boolean>(false);
  readonly selectedPokemon = signal<PokemonDetail | null>(null);
  readonly isLoadingDetail = signal<boolean>(false);

  // 3. Signal derivado con el filtrado reactivo
  readonly filteredPokemon = computed(() => {
    const list = this.allPokemon();
    const term = this.searchTerm().toLowerCase().trim();
    const onlyFavs = this.showOnlyFavorites();

    return list.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(term) || p.id.toString() === term;
      const matchesFav = onlyFavs ? this.favoritesService.isFavorite(p.id) : true;
      return matchesSearch && matchesFav;
    });
  });

  // 4. Dividir el arreglo filtrado en filas de 3 elementos para el Virtual Scroll en Grid
  readonly pokemonRows = computed(() => {
    const list = this.filteredPokemon();
    const chunkSize = 3; // 3 columnas en escritorio
    const rows: PokemonCardData[][] = [];

    for (let i = 0; i < list.length; i += chunkSize) {
      rows.push(list.slice(i, i + chunkSize));
    }

    return rows;
  });

  onSearchChange(term: string): void {
    this.searchTerm.set(term);
  }

  onToggleFavorites(showFavs: boolean): void {
    this.showOnlyFavorites.set(showFavs);
  }

  onSelectPokemon(id: number): void {
    this.isLoadingDetail.set(true);
    this.pokemonService.getPokemonDetail(id).subscribe({
      next: (detail) => {
        this.selectedPokemon.set(detail);
        this.isLoadingDetail.set(false);
      },
      error: () => this.isLoadingDetail.set(false)
    });
  }

  onCloseDetail(): void {
    this.selectedPokemon.set(null);
  }
}
```

#### es actuar como el componente contenedor principal (Smart Component) de la Pokédex
Se encarga de orquestar el flujo de datos entre los servicios (PokemonService, FavoritesService)
gestionar el estado reactivo con Signals y coordinar la renderización de alto rendimiento mediante Angular CDK Virtual Scroll


Responsabilidades Clave y Mecanismos de Arquitectura

1. Puente Observable a Signal (toSignal)

```
readonly allPokemon = toSignal(this.pokemonService.getPokemonList(151, 0), {
  initialValue: [] as PokemonCardData[]
});
```

Conexión RxJS -> Signals: Utiliza toSignal para suscribirse automáticamente al Observable de PokemonService.
Convierte el resultado en un Signal de solo lectura con un valor inicial seguro ([]), eliminando la necesidad de manejar suscripciones manuales o pipe async


2. Estado Derivado Declarativo (computed)

El componente no muta arreglos ni mantiene banderas imperativas de filtrado; utiliza la función computed() para recalcular listas en tiempo real:

filteredPokemon: Evalúa reactivamente tres fuentes de verdad: allPokemon(), searchTerm() y favoritesService.isFavorite().
Cuando cualquiera de las tres cambia, la lista filtrada se actualiza de manera automática.

pokemonRows (Estrategia de Grilla para Virtual Scroll):

```
readonly pokemonRows = computed(() => {
  const list = this.filteredPokemon();
  const chunkSize = 3; // 3 columnas
  const rows: PokemonCardData[][] = [];
  for (let i = 0; i < list.length; i += chunkSize) {
    rows.push(list.slice(i, i + chunkSize));
  }
  return rows;
});
```

Problema técnico: cdk-virtual-scroll-viewport está diseñado nativamente para listas unidimensionales (verticales fila por fila), no para cuadrículas CSS grid.

Solución elegante: Convierte el arreglo plano en una matriz de filas (PokemonCardData[][]), donde cada elemento representa una fila de 3 Pokémon. Así, el Virtual Scroll calcula la altura estricta por fila (itemSize="220"),
mientras que Tailwind CSS renderiza los 3 elementos en la cuadrícula interna (grid-cols-1 sm:grid-cols-2 lg:grid-cols-3).

3. Renderizado Virtual de Alto Rendimiento (CDK Virtual Scroll)
Ahorro masivo de nodos DOM: En lugar de renderizar 151 (o miles) de tarjetas simultáneamente en el DOM, el Viewport solo mantiene creados los elementos visibles en pantalla (+ un pequeño margen de buffer).
Integración del control de flujo: Combina la directiva estructural *cdkVirtualFor para iterar sobre las filas de la matriz con el nuevo bloque @for (pokemon of row; track pokemon.id) para renderizar las tarjetas individuales.

4. Manejo de Estado Asíncrono del Modal

```
onSelectPokemon(id: number): void {
  this.isLoadingDetail.set(true);
  this.pokemonService.getPokemonDetail(id).subscribe({
    next: (detail) => {
      this.selectedPokemon.set(detail);
      this.isLoadingDetail.set(false);
    },
    error: () => this.isLoadingDetail.set(false)
  });
}
```    

Activa un spinner de carga flotante (isLoadingDetail) mientras PokemonService resuelve la petición HTTP (o recupera el objeto desde la caché en memoria).

Al recibir el detalle, asigna la información al Signal selectedPokemon, lo que inmediatamente renderiza el modal PokemonDetailComponent.


#### Flujo

			   ┌───────────────────────┐
               │    PokemonService     │
               └───────────┬───────────┘
                           │ RxJS Observable
                           ▼
                       toSignal()
                           │
┌──────────────────┐       ▼      ┌─────────────────────────┐
│  searchTerm()    ├─► computed() ◄┤ FavoritesService (Set)  │
└──────────────────┘       │      └─────────────────────────┘
                           ▼
                    filteredPokemon()
                           │
                           ▼
                     pokemonRows() [Matriz 3xN]
                           │
                           ▼
               CDK Virtual Scroll (Viewport)
                           │
                           ▼
                 PokemonCardComponent (x3)
                 

# Revisión poke api


## 1. Modelo

Respuesta detallada en json:

```
{
  "id": 1,
  "name": "bulbasaur",
  "types": [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ]
}

```


Corresponde a:

```
export interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: PokemonSprites;
  types: PokemonType[];
  stats: PokemonStat[];
  abilities: PokemonAbility[];
}
```

Por eso no corresponde array en: 

```
export interface PokemonTypeInfo {
  name: string;
  url: string;
}

export interface PokemonType {
  slot: number;
  type: PokemonTypeInfo;
}
```


### Código armado

##### Se ve como hay un objeto dentro de otro en types dentro del array principal en detalle:

`types: PokemonType[];`

```typescript
  "types": [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "poison",
        "url": "https://pokeapi.co/api/v2/type/4/"
      }
    }
  ]
```


### Endpoint principal

```
{
  "count": 1302,
  "next": "https://pokeapi.co/api/v2/pokemon?offset=151&limit=151",
  "previous": null,
  "results": [
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
      "name": "ivysaur",
      "url": "https://pokeapi.co/api/v2/pokemon/2/"
    },
    {
      "name": "venusaur",
      "url": "https://pokeapi.co/api/v2/pokemon/3/"
    }
    // ... así hasta los 151 resultados
  ]
}

```

En service:

```
// En PokemonService:
getPokemonList(limit: number = 151, offset: number = 0): Observable<PokemonCardData[]> {
  return this.http
    .get<PokemonListResponse>(`${this.baseUrl}/pokemon?limit=${limit}&offset=${offset}`)
    .pipe(
      map((response) =>
        response.results.map((item) => {
          const id = this.extractIdFromUrl(item.url); // Extrae '1' de ".../pokemon/1/"
          return {
            id,
            name: item.name,
            imageUrl: this.getPokemonImageUrl(id) // Genera la URL directa a la imagen oficial
          };
        })
      )
    );
}
```


### DTO

Data Transfer Object (DTO) / modelo de presentación propio creado en nuestra aplicación.

```
export interface PokemonCardData {
  id: number;
  name: string;
  imageUrl: string;
  url: string;
}
```


### Sprite

json:

```
{
  "id": 1,
  "name": "bulbasaur",
  "sprites": {
    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    "other": {
      "official-artwork": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
      }
    }
  }
}
```

```
export interface PokemonSprites {
  front_default: string;
  other?: {
    'official-artwork'?: {
      front_default: string;
    };
  };
}
```

Debido a que other y 'official-artwork' son opcionales, y a que 'official-artwork' tiene un guion en su nombre, al consumir esta propiedad en TypeScript se debe usar:

Optional Chaining (?.) para evitar errores Cannot read properties of undefined.
Bracket Notation (['...']) para acceder a la clave con guion.
Nullish Coalescing (??) para proporcionar una imagen por defecto si la oficial no está disponible.



## Record
Record<K, T> es un Utility Type (tipo de utilidad) nativo de TypeScript
que se utiliza para definir mapas o diccionarios clave-valor con tipos estrictos.

```
// ❌ Error de compilación: falta la propiedad 'badge'
export const POKEMON_TYPE_COLORS: Record<string, PokemonTypeColor> = {
  electric: {
    bg: 'bg-amber-300',
    text: 'text-amber-800',
    border: 'border-amber-300'
  }
};
```


## Service

```
  getPokemonList(limit: number = 151, offset: number = 0): Observable<PokemonCardData[]> {
    return this.http
      .get<PokemonListResponse>(`${this.baseUrl}/pokemon?limit=${limit}&offset=${offset}`)
      .pipe(
        map((response) =>
          response.results.map((item) => this.transformToCardData(item.name, item.url))
        )
      );
  }
```

##### devuelve un Observable de RxJS que, al suscribirse (o consumirse mediante toSignal / async pipe), emite un arreglo de objetos de tipo PokemonCardData[].

Ej: Si invocamos la función limitando la búsqueda a los primeros 3 Pokémon:

```
this.pokemonService.getPokemonList(3, 0).subscribe((pokemons) => {
  console.log(pokemons);
});
```

El valor emitido por el Observable

El valor final que recibe la aplicación es este arreglo de objetos:
```
[
  {
    id: 1,
    name: 'bulbasaur',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    url: 'https://pokeapi.co/api/v2/pokemon/1/'
  },
  {
    id: 2,
    name: 'ivysaur',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
    url: 'https://pokeapi.co/api/v2/pokemon/2/'
  },
  {
    id: 3,
    name: 'venusaur',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
    url: 'https://pokeapi.co/api/v2/pokemon/3/'
  }
]
```


#### Mapeo paso a paso (Antes y Después)

Lo que responde la PokéAPI (PokemonListResponse):

```
{
  "count": 1302,
  "next": "https://pokeapi.co/api/v2/pokemon?offset=3&limit=3",
  "previous": null,
  "results": [
    { "name": "bulbasaur", "url": "https://pokeapi.co/api/v2/pokemon/1/" },
    { "name": "ivysaur", "url": "https://pokeapi.co/api/v2/pokemon/2/" },
    { "name": "venusaur", "url": "https://pokeapi.co/api/v2/pokemon/3/" }
  ]
}
```

Transformación RxJS con .pipe(map(...)):
Descarta count, next y previous.
Toma la lista results.
Parsea cada URL para extraer el ID (/1/ -> 1).
Construye dinámicamente la propiedad imageUrl apuntando al CDN del artwork oficial.
Retorna únicamente la lista limpia de tarjetas lista para renderizarse en el HTML.


### Detalles con get

```
  getPokemonDetail(nameOrId: string | number): Observable<PokemonDetail> {
    const key = nameOrId.toString().toLowerCase();

    if (this.detailCache.has(key)) {
      return of(this.detailCache.get(key)!);
    }

    return this.http.get<PokemonDetail>(`${this.baseUrl}/pokemon/${key}`).pipe(
      tap((detail) => {
        this.detailCache.set(key, detail);
        this.detailCache.set(detail.id, detail);
      })
    );
  }

```

estrategia de caché en memoria
consulta de doble clave (Dual-Key In-Memory Cache).
##### entregar los detalles completos de un Pokémon de forma reactiva mediante un Observable
evitando realizar peticiones HTTP innecesarias al servidor si los datos ya se descargaron previamente

1. firma y normalización:

```
getPokemonDetail(nameOrId: string | number): Observable<PokemonDetail> {
  const key = nameOrId.toString().toLowerCase();
```

Polimorfismo en el argumento (string | number): Permite invocar la función pasando tanto el número identificador (25) como el nombre del Pokémon ("pikachu" o "Pikachu").
Normalización (key): Convierte cualquier argumento a una cadena de texto en minúsculas. Esto garantiza consistencia al consultar la caché (evita que "Pikachu" y "pikachu" se traten como búsquedas distintas).

2. Comprobación y Retorno desde Caché (Cache Hit)
this.detailCache.has(key): Verifica si la clave ya existe en el Map interno del servicio.

of(...): Operador de RxJS que toma un valor estático en memoria y lo envuelve en un Observable.

Operador ! (Non-null assertion): Le indica a TypeScript que estamos seguros de que get(key) devolverá un objeto PokemonDetail válido y no undefined.

Resultado: Si está en caché, los datos se entregan de manera síncrona/instantánea sin hacer ninguna llamada HTTP.

```
if (this.detailCache.has(key)) {
  return of(this.detailCache.get(key)!);
}
```

3. Petición HTTP y Guardado Automático (Cache Miss)

```
return this.http.get<PokemonDetail>(`${this.baseUrl}/pokemon/${key}`).pipe(
  tap((detail) => {
    this.detailCache.set(key, detail);
    this.detailCache.set(detail.id, detail);
  })
);
```


#### Ej:

Primera consulta por nombre (getPokemonDetail('pikachu')):

Estado: No está en caché.
Acción: Llama a la red (GET /pokemon/pikachu).
Efecto tap: Guarda en caché bajo la clave 'pikachu' y bajo la clave 25.

Segunda consulta por ID (getPokemonDetail(25)):
Estado: Cache Hit instantáneo.
Acción: No toca la red; el método of() retorna directamente la instancia guardada previamente bajo la clave 25.    




## favorites service

```

import { Injectable, signal, effect, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private readonly STORAGE_KEY = 'pokedex_favorites';

  private favoriteIdsSignal = signal<number[]>(this.loadFromStorage());

  readonly favoriteIds = this.favoriteIdsSignal.asReadonly();

  private favoriteSet = computed(() => new Set(this.favoriteIdsSignal()));

  constructor() {
    effect(() => {
      this.saveToStorage(this.favoriteIdsSignal());
    });
  }
```

Imports de Angular Core: Importa signal, computed y effect, las tres primitivas del modelo de reactividad en Angular moderno.

providedIn: 'root': Registra el servicio como un singleton global único en toda la aplicación


STORAGE_KEY
clave privada e inmutable utilizada para guardar el arreglo en el localStorage del navegador
Evita cadenas de texto hardcodeadas (magic strings).

Signal Interno y Mutable:
private favoriteIdsSignal = signal<number[]>(this.loadFromStorage());
contiene la lista de IDs de Pokémon favoritos (ej: [1, 4, 25]).

Inicialización perezosa: Al instanciarse el servicio, ejecuta inmediatamente this.loadFromStorage() para recuperar la lista guardada previamente en localStorage

Encapsulamiento: Es private para evitar que componentes externos modifiquen directamente el estado invocando .set() o .update().


Solo Lectura (favoriteIds)
readonly favoriteIds = this.favoriteIdsSignal.asReadonly();
#### Expone una versión de solo lectura (Signal<number[]>) del Signal privado usando .asReadonly().
##### Los componentes pueden consumir favoriteIds() en sus plantillas HTML o en computados.
##### Garantiza la unidireccionalidad del flujo de datos: los componentes no pueden alterar la lista directamente
##### deben hacerlo llamando a los métodos públicos del servicio (toggleFavorite).



Optimización con Estado Calculado (favoriteSet)
private favoriteSet = computed(() => new Set(this.favoriteIdsSignal()));
##### Crea un Signal derivado reactivo (computed) que transforma la lista de IDs en un Set<number>.
Rendimiento ($O(1)$ vs $O(n)$):
Si una tarjeta necesita saber si un Pokémon es favorito usando un arreglo, tendría que ejecutar Array.includes(id),
lo cual es una búsqueda lineal $O(n)$
Al usar un Set, la comprobación Set.has(id) se realiza en tiempo constante $O(1)$.

Eficiencia visual: Al renderizar 151 tarjetas dentro del Virtual Scroll, evaluar favoritos con un Set es significativamente más rápido.


Sincronización Automática en el Constructor (effect)

```
constructor() {
  effect(() => {
    this.saveToStorage(this.favoriteIdsSignal());
  });
}
```

Angular rastrea automáticamente que favoriteIdsSignal() fue leído dentro de la función.
Cada vez que favoriteIdsSignal sufra una modificación (añadir o quitar un favorito)
el effect se dispara de forma transparente y ejecuta this.saveToStorage(...).
Esto elimina la necesidad de llamar manualmente a saveToStorage() desde cada método de mutación.


Retorna un valor booleano (true o false) dependiendo de si el ID indicado pertenece al Set de favoritos en ese instante.
Supongamos que los favoritos actuales en el servicio son los IDs [1, 4, 25] (Bulbasaur, Charmander y Pikachu).

```
// Estado actual: favoriteIdsSignal = [1, 4, 25]

const esPikachuFavorito = favoritesService.isFavorite(25);
// Retorno: true (porque 25 existe en el Set {1, 4, 25})

const esSquirtleFavorito = favoritesService.isFavorite(7);
// Retorno: false (porque 7 no existe en el Set {1, 4, 25})
```


toggleFavorite(id: number): void
No retorna ningún valor (retorno void).
Su función es alternar el estado de un Pokémon (agregarlo si no existe, o eliminarlo si ya está)
desencadenar en cadena las actualizaciones del Signal, del computed y del effect de localStorage

Estado:
favoriteIdsSignal() -> [1, 4, 25]
localStorage -> '[1,4,25]'


a: Eliminar un favorito existente (id = 4)
favoritesService.toggleFavorite(4);
Evaluación de la condición: currentIds.includes(4) es true.
Acción: Aplica el .filter() excluyendo el 4.
Nuevo estado del Signal: [1, 25]

b: Agregar un nuevo favorito (id = 7)
favoritesService.toggleFavorite(7);

Evaluación de la condición: currentIds.includes(7) es false.
Acción: Utiliza spread syntax [...currentIds, 7] para concatenar el nuevo ID.
Nuevo estado del Signal: [1, 25, 7]

Consecuencias automáticas:
favoriteSet() recalcula su valor a Set { 1, 25, 7 }.
El effect() actualiza localStorage con '[1,25,7]'.
Si consultas isFavorite(7), ahora retornará true.
    


## Pokemon card
##### recibe datos mediante @Input y comunica las acciones del usuario al componente padre mediante @Output.

Input({ required: true }) pokemon!: PokemonCardData:
required: true: Característica introducida en Angular 16+. El compilador lanzará un error si el componente padre intenta instanciar <app-pokemon-card> sin pasar la propiedad [pokemon].
! (Definite Assignment Assertion): Le indica a TypeScript que la variable no estará undefined en tiempo de ejecución aunque no se inicialice en el constructor.    

@Input() isFavorite: boolean = false:
Entrada opcional con valor por defecto false. Controla si se dibuja el corazón relleno (heroHeartFill) o el corazón en contorno (heroHeart).
    

Salidas de eventos (@Output)
cardClick = new EventEmitter<number>(): Emite el id numérico del Pokémon cuando el usuario toca la tarjeta para abrir la vista detallada.
toggleFavorite = new EventEmitter<number>(): Emite el id numérico cuando el usuario toca el botón del corazón para agregar o quitar de favoritos.    


Métodos y Manejo de Propagación (Event Bubbling)
En el HTML, el <button> del corazón está anidado dentro del <div (click)="onCardClick()"> de la tarjeta.
Sin event.stopPropagation(), ocurriría el fenómeno de Event Bubbling (burbujeo de eventos):



## Busqueda

```
[1. PokemonSearchComponent] ──(searchChange)──> [2. PokemonListComponent]
                                                         │
                                               update: searchTerm (Signal)
                                                         │
                                           ┌─────────────┴─────────────┐
                                           ▼                           ▼
                                    [Filtro Local]            [apiSearchResult]
                                   (151 de Kanto / $O(1)$)    (RxJS debounce + API)
                                           │                           │
                                           └─────────────┬─────────────┘
                                                         ▼
                                           [3. computed(filteredPokemon)]
                                                         │
                                                         ▼
                                           [4. PokemonCardComponent]                                 


```


1. Captura en el componente visual (PokemonSearchComponent)
El usuario escribe en el campo de texto.
El componente captura el valor (vía FormControl o evento input) y lo emite al padre mediante un evento de salida:
`@Output() searchChange = new EventEmitter<string>();`


2. Actualización del estado global en la lista (PokemonListComponent)
PokemonListComponent escucha el evento en su plantilla:
`<app-pokemon-search (searchChange)="onSearchChange($event)" />`

El handler ejecuta onSearchChange(term) y actualiza el Signal de búsqueda:
`this.searchTerm.set(term);`

3. Tubería reactiva de búsqueda remota (PokemonService)
##### Mediante toObservable(this.searchTerm), el valor del Signal se convierte en un flujo RxJS.
Aplica un operador debounceTime(300) para esperar 300 ms sin escritura antes de consultar a la red, y distinctUntilChanged() para evitar consultas duplicadas.
Paso clave de optimización: Si el término coincide con alguno de los 151 Pokémon iniciales ya cargados en memoria (allPokemon), el flujo ignora la API y retorna null.

4. Si es un Pokémon de otra generación (ej: "Lucario" o ID #448), ejecuta switchMap invocando al servicio:
`this.pokemonService.searchSinglePokemon(query)`

5. PokemonService hace la petición HTTP GET a /pokemon/{id|nombre}, transforma la respuesta en un objeto PokemonCardData y la guarda en caché. Si la API responde con un error 404, el operador catchError devuelve null sin congelar la app.


Filtrado y unificación reactiva (computed)
El Signal derivado filteredPokemon se re-evalúa automáticamente cada vez que cambia el término de búsqueda, la lista base o la palanca de favoritos:

Evaluación local: Filtra los 151 Pokémon iniciales según el término de búsqueda y si el filtro showOnlyFavorites está activo.
Evaluación remota: Si el filtro local no arrojó resultados y existe un término escrito, toma el resultado de apiSearchResult() enviado por el servicio y lo inserta como una tarjeta en el arreglo.


Renderizado en el DOM
El bloque de control @for de la plantilla de PokemonListComponent detecta el nuevo valor de filteredPokemon(),
redibuja de forma eficiente las tarjetas <app-pokemon-card> resultantes.



# Autocomplete






# Album Quiz

proyecto frontend. juego en el que hay que adivinar la portada de un álbum de música, con niveles de dificultad (los albums más vendidos y más conocidos sería el nivel básico/facil; ej Thriller de Michael Jackson) . 

El album tendría que estar blureado y el usuario al escribir su nombre en el campo, si es correcto se desblurea. 

Esa sería la función principal. 

Como funcion secundaria sería agregar autocompletado/sugerencia en el campo/input para adivinar el album. 

Otra función secuandaria sería llevar un puntaje de acuerdo a los niveles de dificultad.

Ahora, existe una api de albums de musica para traer al frontend? 

Empecemos con esta idea, todavía no hagamos código. 


Algoritmo de juego: será una sola ronda con una puntuación. 

1. Primero que empiece por las fáciles, cuando se terminen que siga con las intermedio y después dificil. 
2. Segundo: que en cada nivel, las caratulas no tengan un orden, sino que sea random y que no repita una caratula que ya había mostrado anteriormente.


contador de puntaje y respuesta correctas

limpieza, autocompletado y sugerencias

puntuaje máximo histórico (High Score) en el navegador usando localStorage


Apartado ayuda:

lo siguiente: Descuento Porcentual, Pistas Escalonadas, Claridad de costo
diga "¡Nuevo récord personal!"


Apartado Visual:

1. Tilde verde correcto (siguiente portada para adivinar)

2. Cruz roja incorrecto (perdida de racha, pero no significa perdida de juego; el juego continua).



## Arquitectura


src/
├── data/
│   └── albums.json             # La base de datos estática local
├── types/
│   └── game.ts                 # Definiciones de tipos / interfaces (TypeScript)
├── utils/
│   ├── normalizer.ts           # Funciones para limpiar tildes y mayúsculas
│   └── gameLogic.ts            # Algoritmos de barajado (Fisher-Yates) y puntajes
├── components/
│   ├── StartScreen.tsx         # Pantalla de bienvenida
│   ├── GameScreen.tsx          # Contenedor principal de la partida
│   ├── AlbumCover.tsx          # Imagen con el efecto blur dinámico
│   ├── AutocompleteInput.tsx   # Input de texto con sugerencias y feedback visual
│   ├── ScoreBoard.tsx          # Panel derecho (puntos, racha, botones de ayuda)
│   └── GameOverScreen.tsx      # Pantalla final con récord personal (LocalStorage)
└── App.tsx                     # Orquestador general (Controla qué pantalla se muestra)




Firefox no puede establecer una conexión con el servidor en ws://localhost:5173/?token=IhMw-rnA7im9.

Se bloqueó la carga de un módulo de “http://localhost:5173/node_modules/.vite/deps/react-dom.js?v=9c1970b3” debido a un tipo MIME no permitido (“”).

Ha fallado la carga del módulo con origen "http://localhost:5173/node_modules/.vite/deps/react-dom.js?v=9c1970b3".

Firefox no puede establecer una conexión con el servidor en ws://localhost:5173/?token=IhMw-rnA7im9.

failed to connect to websocket.
your current setup:
  (browser) localhost:5173/ <--[HTTP]--> localhost:5173/ (server)
  (browser) localhost:5173/ <--[WebSocket (failing)]--> localhost:5173/ (server)
Check out your Vite / network configuration and https://vite.dev/config/server-options.html#server-hmr . <anonymous code>:1:147461
    overrideMethod <anonymous code>:1
    connect client:968



Error en el mapeo fuente: Error: JSON.parse: unexpected character at line 1 column 1 of the JSON data
Stack in the worker:parseSourceMapInput@resource://devtools/client/shared/vendor/source-map/lib/util.js:163:15
_factory@resource://devtools/client/shared/vendor/source-map/lib/source-map-consumer.js:1066:22
SourceMapConsumer@resource://devtools/client/shared/vendor/source-map/lib/source-map-consumer.js:26:12
_fetch@resource://devtools/client/shared/source-map-loader/utils/fetchSourceMap.js:83:19

URL del recurso: http://localhost:5173/%3Canonymous%20code%3E
URL del mapa fuente: installHook.js.map

Error en el mapeo fuente: JSON.parse: unexpected character at line 1 column 1 of the JSON data
URL del recurso: http://localhost:5173/%3Canonymous%20code%3E
URL del mapa fuente: installHook.js.map

