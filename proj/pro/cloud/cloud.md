# Cloud



# AWS


# 1. Fundamentos de la Nube

Pilares teóricos del Cloud Computing

#### Modelos de Nube: Nube pública, privada e híbrida.   

#### Ventajas del Cloud: Modelo de pago por uso, escalabilidad automática, elasticidad y alta disponibilidad sin mantenimiento de infraestructura física.

#### Infraestructura Global de AWS
Regiones: Ubicaciones geográficas independientes en el mundo.
Zonas de Disponibilidad (AZs): Uno o más centros de datos aislados dentro de una misma región con conectividad de muy baja latencia.

#### Modelo de Responsabilidad Compartida
AWS se encarga de: La seguridad DE la nube (hardware, centros de datos, red física, hipervisores).
Tú te encargas de: La seguridad EN la nube (configuración de red, cifrado, datos, parches de SO y gestión de accesos).



## 1. Fundamentos

### Beneficos

#### La computación en la nube es la entrega bajo demanda de recursos informáticos
##### (cómputo, almacenamiento, bases de datos y redes) a través de Internet con un modelo de precios de pago por uso (pay-as-you-go).

### 1. Cambiar gasto de capital (CapEx) por gasto operativo (OpEx): En lugar de invertir fuertemente en centros de datos físicos antes de saber cómo se utilizarán, se paga únicamente por los recursos consumidos

### 2. Economías de escala masivas: AWS logra costos unitarios más bajos gracias a la escala agregada de cientos de miles de clientes, trasladando ese ahorro en forma de reducciones continuas de precios.

### 3. Eliminar las conjeturas de capacidad: Se eliminan los problemas de sobredimensionar (dinero desperdiciado) o subdimensionar (caída de servicios por saturación).

### 4. Mayor velocidad y agilidad: La disponibilidad de recursos pasa de semanas (compra e instalación de servidores físicos) a minutos mediante un clic o una llamada a API.

### 5. Enfoque en lo que realmente importa: Permite dedicar recursos al desarrollo de aplicaciones y valor de negocio, en lugar de gastar tiempo en el mantenimiento de infraestructura y hardware.

### 6. Despliegue global en minutos: Es posible desplegar aplicaciones en múltiples regiones del mundo con unos pocos clics para reducir la latencia de los usuarios finales.


### Modelos de Despliegue y de Servicios de TI

Nube Pública: Todos los componentes de la aplicación se ejecutan en la nube (ej. startup construida 100% sobre AWS).

Nube Privada (On-premises): Infraestructura gestionada dentro del centro de datos propio de la organización usando virtualización.

Nube Híbrida: Conexión entre la infraestructura local (On-premise) y la nube pública mediante tecnologías de red dedicadas como AWS Direct Connect o conexiones VPN.


### Modelos de Servicios


#### IaaS (Infraestructura como Servicio, Ejemplo: Amazon EC2):
Otorga el máximo nivel de control y flexibilidad sobre los recursos de TI (servidores virtuales, red, almacenamiento).

#### PaaS (Plataforma como Servicio, Ejemplo: AWS Elastic Beanstalk):
Elimina la necesidad de gestionar el sistema operativo subyacente y la infraestructura, permitiendo enfocarse en el despliegue del código

#### SaaS (Software como Servicio, Ejemplo: Amazon WorkSpaces):
Producto completo ejecutado y gestionado por el proveedor de servicio


### Infraestructura Global de AWS

La red mundial de AWS se divide jerárquicamente para garantizar tolerancia a fallos, alta disponibilidad y baja latencia:

Infraestructura Global:
  ├── Región (ej. us-east-1)
  │     ├── Zona de Disponibilidad A (AZ 1) -> 1+ Centros de Datos
  │     ├── Zona de Disponibilidad B (AZ 2) -> 1+ Centros de Datos
  │     └── Zona de Disponibilidad C (AZ 3) -> 1+ Centros de Datos
  └── Puntos de Presencia (Edge Locations) -> Red de CDN (CloudFront)


### Red de CDN: grupo de servidores repartidos por el mundo que guardan copias de los archivos de una página web para entregárselos a los usuarios desde el lugar más cercano posible

#### Servidor de origen: Es el servidor principal donde se aloja el sitio web original.
#### Servidores perimetrales (Edge / PoP): Son los nodos de la CDN distribuidos en diferentes ciudades o países.
#### Almacenamiento en caché: Cuando alguien visita una web, la CDN guarda temporalmente imágenes, videos y código en el nodo más próximo para responder al instante. Si un archivo no está ahí, lo busca en el origen y lo guarda para las siguientes visitas.


### Modelo de Responsabilidad Compartida

Diferencia de forma estricta los límites de seguridad entre el proveedor y el cliente:

AWS: Seguridad DE la Nube
Hardware físico, centros de datos, red física, almacenamiento físico, hipervisores y software de infraestructura.

Cliente: Seguridad EN la Nube
Datos del usuario, gestión de identidades y accesos (IAM), parches del sistema operativo de instancias EC2, reglas de firewall (Security Groups), cifrado de datos (en reposo y en tránsito) y configuración de red VPC.


### Elasticidad, Escalabilidad y Disponibilidad

Escalabilidad: Capacidad de un sistema para manejar incrementos de carga agregando recursos.

#### Vertical (Scale Up): Aumentar la capacidad de un servidor existente (ej. pasar de 4 GB a 16 GB de RAM).

#### Horizontal (Scale Out): Añadir más instancias de servidores en paralelo.

#### Elasticidad: Capacidad de adaptar automáticamente la cantidad de recursos asignados a la demanda real en tiempo real
##### añadir servidores en picos de tráfico y reducirlos cuando el tráfico baje con AWS Auto Scaling

Alta Disponibilidad (HA): Garantizar que un sistema permanezca operativo sin interrupciones perceptibles distribuyendo sus componentes entre múltiples Zonas de Disponibilidad (AZs).






# 2. Servicios Esenciales por Categórica

#### Seguridad e Identidad: AWS IAM
Gestión de usuarios, grupos, roles y políticas de acceso bajo el principio de menor privilegio.

#### Cómputo: Amazon EC2
Servidores virtuales en la nube para ejecutar aplicaciones.

#### Cómputo Serverless: AWS Lambda
Ejecución de código en respuesta a eventos sin necesidad de gestionar servidores.

#### Almacenamiento: Amazon S3
Almacenamiento de objetos (archivos, imágenes, backups) altamente disponible y escalable.

#### Redes: Amazon VPC
Red privada virtual aislada donde configuras subredes, tablas de ruteo y Security Groups.

#### Bases de Datos: Amazon RDS
Servicio administrado para bases de datos relacionales (PostgreSQL, MySQL).

#### Bases de Datos NoSQL: Amazon DynamoDB
Base de datos NoSQL clave-valor de ultra baja latencia.



## Servicios


1. Seguridad e Identidad (Security & Compliance)

### AWS IAM (Identity and Access Management): centro de control de acceso a la cuenta de AWS
#### Permite administrar quién (autenticación) puede hacer qué (autorización) sobre qué recursos.

Usuarios: Identidades para personas u aplicaciones con credenciales permanentes.
Grupos: Colección de usuarios para aplicar políticas en lote (ej. grupo Developers).
Roles: Identidades temporales asumidas por usuarios o servicios de AWS (ej. permitir que una instancia EC2 lea archivos de S3 sin guardar claves dentro del servidor).
Políticas: Documentos JSON que definen explícitamente permisos (Allow / Deny).

##### Principio del menor privilegio (Least Privilege): Otorgar únicamente los permisos estrictamente necesarios para cumplir una función específica.


2. Cómputo

### Amazon EC2 (Elastic Compute Cloud): Servidores virtuales en la nube con control total del sistema operativo.

AMI (Amazon Machine Image): Plantilla que contiene el sistema operativo, servidor web y aplicaciones preinstaladas.
Tipos de instancia: Optimizadas para propósito general (t3, m5), cómputo (c5), memoria (r5) o almacenamiento.
Modelos de pago: On-Demand (sin compromiso), Reserved Instances / Savings Plans (descuentos por compromiso de 1 a 3 años), Spot Instances (hasta 90% de descuento usando capacidad ociosa, interrumpible).

### AWS Lambda (Serverless Compute): Ejecución de código impulsada por eventos sin necesidad de aprovisionar ni administrar servidores.

Funcionamiento: El código se ejecuta únicamente cuando se activa un evento (ej. subida de una imagen a S3, petición HTTP via API Gateway).
Facturación: Se paga por milisegundo de ejecución y recursos consumidos. Si nadie usa la aplicación, el costo de cómputo es $0.

### Amazon ECS (Elastic Container Service) y EKS (Elastic Kubernetes Service): Servicios de orquestación de contenedores Docker administrados para desplegar microservicios a escala.


3. Almacenamiento (Storage)

### Amazon S3: Objetos (Archivos, imágenes, backups)
Almacenamiento masivo, assets estáticos, data lakes, hosting estático.

### Amazon EBS: Bloques (Disco duro virtual para EC2)
Disco de sistema operativo y almacenamiento persistente de alta velocidad para EC2.

### Amazon EFS: Sistema de archivos compartido (NFS)
Archivos compartidos simultáneamente entre múltiples servidores Linux EC2.

Clases de Almacenamiento:
S3 Standard: Alta disponibilidad y acceso frecuente.
S3 Standard-IA (Infrequent Access): Menor costo de almacenamiento, pero cobra por lectura. Ideal para datos consultados raramente.
S3 Glacier Flexible / Deep Archive: Almacenamiento de archivo de ultra bajo costo para retención a largo plazo y cumplimiento regulatorio.


4. Redes y Entrega de Contenido (Networking)

### Amazon VPC (Virtual Private Cloud): Red virtual privada y aislada dentro de tu cuenta de AWS.

Subredes Públicas: Tienen acceso directo a Internet a través de un Internet Gateway
Alojan balanceadores de carga y servidores web.

Subredes Privadas: Aisladas de Internet.
Alojan bases de datos y backend de aplicaciones. Usan un NAT Gateway si necesitan salir a descargar parches.

Mecanismos de Firewall:

Security Groups: Firewall a nivel de instancia (servidor).
Es Stateful (si se permite el tráfico de entrada, la respuesta sale automáticamente).

Network ACLs (NACL): Firewall a nivel de subred.
Es Stateless (requiere reglas explícitas de entrada y salida).
    

### Amazon CloudFront: Red de Entrega de Contenido (CDN) global que almacena en caché contenido estático y dinámico en los Puntos de Presencia (Edge Locations) para reducir latencias a nivel mundial.


5. DB

### Amazon RDS (Relational Database Service): Servicio administrado de bases de datos relacionales (SQL).

Motores soportados: PostgreSQL, MySQL, MariaDB, Oracle, SQL Server y Amazon Aurora (motor optimizado por AWS con hasta 5x más rendimiento que MySQL estándar).
Características: Backups automáticos, parches de seguridad, réplicas de lectura y alta disponibilidad Multi-AZ con failover automático.

### Amazon DynamoDB

Base de datos NoSQL de clave-valor totalmente administrada (Serverless).
Ofrece latencia de un solo dígito en milisegundos a cualquier escala.
Escalado automático de capacidad de lectura/escritura sin mantenimiento de clústeres.

    
6. Monitoreo y Auditoría (Management & Governance)

### Amazon CloudWatch: Monitorea métricas operativas (uso de CPU, espacio en disco), recolecta logs centralizados y activa alarmas en tiempo real.

### AWS CloudTrail: Registra e imparte trazabilidad de todas las llamadas a las API de AWS dentro de la cuenta (auditoría de "quién hizo qué, cuándo y desde qué IP").

    

# 3. Práctica

1. Creación y Protección de la Cuenta:

Regístrate en AWS y habilita la Capa Gratuita (Free Tier).
Activa autenticación de múltiples factores (MFA) en la cuenta Root.
Configura una Alerta de Presupuesto en AWS Budgets (ej. notificación por email si el gasto supera $1 USD).
    
2. Configuración de Accesos (IAM):
Crea un usuario IAM con permisos administrativos para el trabajo diario.
Configura las credenciales de la interfaz de línea de comandos (AWS CLI).

3. Despliegue
S3: Crea un Bucket, sube un archivo y configura sus políticas de acceso
EC2: Lanza una instancia Linux de capa gratuita en una VPC por defecto, conéctate mediante SSH o EC2 Instance Connect y levanta un servidor web sencillo (ej. Nginx o Apache).


## Configuración Segura de la Cuenta y Control de Costos
##### asegurar la cuenta y establecer mecanismos de protección financiera contra cobros accidentales.

### Habilitar MFA en la Cuenta Root: Prioridad crítica de seguridad
Inicia sesión en AWS Management Console con el correo de la cuenta Root.
Busca el servicio IAM en la barra superior.
En el panel principal, haz clic en Add MFA para la cuenta raíz.
Selecciona un dispositivo MFA virtual (Google Authenticator, Authy o 1Password), escanea el código QR y valida dos códigos consecutivos.


### Crear Alerta de Presupuesto en AWS Budgets
En la barra de búsqueda, ingresa a AWS Budgets.
Haz clic en Create budget y selecciona la plantilla Cost budget (o Zero spend budget).
Configura un límite monetario mensual de $1.00 USD.
En la pestaña de alertas, añade tu dirección de correo electrónico para recibir un aviso automático si los costos reales o proyectados alcanzan el 80% ($0.80 USD).


### Crear un Usuario IAM Administrativo: Evita usar la cuenta Root para tareas diarias

Ve a IAM -> Users -> Create user.
Define el nombre de usuario (ejemplo: admin-dev) y marca Provide user access to the AWS Management Console.
En permisos, selecciona Attach policies directly y asigna la política administrada AdministratorAccess.
Cierra sesión como Root e inicia sesión en AWS con la URL personalizada del usuario IAM recién creado.



## Despliegue de Servidor Web (EC2) y Almacenamiento (S3)

#### En esta práctica se crea un contenedor de almacenamiento de objetos en Amazon S3 y se levanta un servidor virtual Linux en Amazon EC2 ejecutando un servidor web Nginx.

### Crear un Bucket en Amazon S3: Almacenamiento masivo de objetos
Ve al servicio Amazon S3 y haz clic en Create bucket.
Asigna un nombre globalmente único (ejemplo: practica-aws-storage-2026) y selecciona tu región más cercana.
Mantén la opción Block All Public Access activada.
Haz clic en Create bucket, ingresa al bucket creado y sube un archivo de prueba mediante la opción Upload.


### Lanzar una Instancia en Amazon EC2: Seleccionar siempre la etiqueta 'Free tier eligible'
Abre el servicio Amazon EC2 y haz clic en Launch Instance.
Name: Ingresa web-server-demo.
AMI (Amazon Machine Image): Selecciona Amazon Linux 2023 AMI (Elegible para la capa gratuita).
Instance Type: Selecciona t2.micro o t3.micro (según la región geográfica).
Key Pair: Selecciona Proceed without a key pair para utilizar conexión web segura por navegador.


### Configurar Reglas del Security Group: Firewall virtual a nivel de servidor

En la sección Network settings, activa las siguientes reglas de entrada:
Allow HTTP traffic from the internet (Puerto 80 abierto a 0.0.0.0/0).
Allow SSH traffic (Puerto 22, idealmente restringido a My IP).

Haz clic en Launch Instance y espera a que el estado cambie a Running.


### Instalar y Levantar Servidor Web Nginx: Conexión por CLI integrada en consola

Selecciona la instancia en la lista de EC2 y haz clic en Connect -> EC2 Instance Connect.
En la terminal remota que se abre en el navegador, ejecuta los comandos de instalación:
```
# Actualizar repositorio e instalar Nginx
sudo dnf update -y
sudo dnf install nginx -y

# Iniciar el servicio Nginx y habilitar inicio automático
sudo systemctl start nginx
sudo systemctl enable nginx
```
Copia la IP pública (Public IPv4 address) de la instancia desde la consola de EC2, pégala en la barra de direcciones del navegador (http://<TU_IP_PUBLICA>) y verás la página de bienvenida de Nginx.
 


## Limpieza (Teardown): garantizar que ningún recurso consuma la cuota mensual de la Capa Gratuita cuando no esté en uso:

Terminar la Instancia EC2: Ve a EC2 -> Instances -> Selecciona web-server-demo -> Instance state -> Terminate instance.

Eliminar el Bucket S3: Ingresa a S3 -> Selecciona el bucket -> Haz clic en Empty para borrar sus archivos internos y posteriormente haz clic en Delete.



## AWS CLI: administrar recursos en Amazon S3 y Amazon EC2 directamente desde tu terminal local.


1. Configuración Previa y Verificación
Antes de interactuar con S3 y EC2, debes inicializar la CLI con las credenciales creadas en IAM (Access Key ID y Secret Access Key).

```
# Configurar credenciales y región por defecto
aws configure

# Verificar que las credenciales están activas e identificar la cuenta
aws sts get-caller-identity
```

2. Comandos Esenciales para Amazon S3
S3 utiliza dos sintaxis: comandos de alto nivel (aws s3) y comandos de bajo nivel API (aws s3api).
Los de alto nivel son más intuitivos para el trabajo cotidiano.

#### Listar
 
```
# Listar todos los buckets en la cuenta
aws s3 ls

# Listar el contenido de un bucket específico
aws s3 ls s3://<nombre-del-bucket>

# Listar contenido de forma recursiva (subcarpetas) con tamaño legible
aws s3 ls s3://<nombre-del-bucket>/ --recursive --human-readable
```

#### Crear y Subir

```
# Crear un nuevo bucket (el nombre debe ser único a nivel mundial)
aws s3 mb s3://<nombre-del-bucket> --region us-east-1

# Subir un archivo local a un bucket
aws s3 cp archivo.txt s3://<nombre-del-bucket>/

# Subir un archivo cambiando su nombre de destino
aws s3 cp archivo.txt s3://<nombre-del-bucket>/renombrado.txt

# Sincronizar un directorio local entero con un bucket
aws s3 sync ./mi-carpeta s3://<nombre-del-bucket>/mi-carpeta/
```

#### Borrar

```
# Borrar un archivo específico dentro de un bucket
aws s3 rm s3://<nombre-del-bucket>/archivo.txt

# Borrar todos los archivos dentro de un directorio remoto
aws s3 rm s3://<nombre-del-bucket>/mi-carpeta/ --recursive

# Vaciar y eliminar un bucket completo
aws s3 rb s3://<nombre-del-bucket> --force
```


3. Comandos Esenciales para Amazon EC2

Para gestionar instancias EC2 se utiliza el servicio aws ec2.
A menudo requerirás filtrar la salida para ver información de forma clara

#### Listar y Consultar

```
# Listar todas las instancias activas/en ejecución con formato resumido en tabla
aws ec2 describe-instances \
  --filters "Name=instance-state-name,Values=running" \
  --query "Reservations[*].Instances[*].[InstanceId, InstanceType, PublicIpAddress, State.Name]" \
  --output table

# Obtener la IP pública de una instancia específica
aws ec2 describe-instances \
  --instance-ids i-<ID_DE_INSTANCIA> \
  --query "Reservations[0].Instances[0].PublicIpAddress" \
  --output text

# Listar Security Groups existentes
aws ec2 describe-security-groups \
  --query "SecurityGroups[*].[GroupId, GroupName, Description]" \
  --output table
```


#### Crear

```
# 1. Crear un Par de Claves (Key Pair) y guardar la clave privada en un archivo .pem
aws ec2 create-key-pair \
  --key-name MiClaveCLI \
  --query 'KeyMaterial' \
  --output text > MiClaveCLI.pem

# Asignar permisos restrictivos al archivo de clave (Linux/macOS)
chmod 400 MiClaveCLI.pem

# 2. Crear un Security Group
aws ec2 create-security-group \
  --group-name WebSGCLI \
  --description "Grupo de seguridad creado desde CLI"

# 3. Habilitar tráfico de entrada HTTP (puerto 80) y SSH (puerto 22) en el Security Group
aws ec2 authorize-security-group-ingress \
  --group-name WebSGCLI \
  --protocol tcp --port 80 --cidr 0.0.0.0/0

aws ec2 authorize-security-group-ingress \
  --group-name WebSGCLI \
  --protocol tcp --port 22 --cidr 0.0.0.0/0

# 4. Lanzar una instancia EC2 (Amazon Linux 2023 t3.micro)
aws ec2 run-instances \
  --image-id ami-0c101f26f147fa7fd \
  --instance-type t3.micro \
  --key-name MiClaveCLI \
  --security-groups WebSGCLI \
  --count 1
```



#### Borrar y Detener

```
# Detener una instancia en ejecución (sin borrarla)
aws ec2 stop-instances --instance-ids i-<ID_DE_INSTANCIA>

# Reiniciar una instancia
aws ec2 reboot-instances --instance-ids i-<ID_DE_INSTANCIA>

# Terminar (eliminar permanentemente) una instancia
aws ec2 terminate-instances --instance-ids i-<ID_DE_INSTANCIA>

# Eliminar un Security Group (debe estar desacoplado de cualquier instancia)
aws ec2 delete-security-group --group-name WebSGCLI

# Eliminar un Par de Claves
aws ec2 delete-key-pair --key-name MiClaveCLI
```


4. Opciones Útiles y Trucos de Producción

Prueba de simulación sin ejecutar (--dry-run):
Verifica si tienes los permisos IAM necesarios antes de lanzar o borrar recursos:
`aws ec2 run-instances --image-id ami-xxxxxx --instance-type t3.micro --dry-run`

Manejo de múltiples perfiles:
Si usas varias cuentas (ej. Dev y Prod), puedes alternar configuraciones usando --profile:
```
aws configure --profile prod
aws s3 ls --profile prod
```


# Curso

AWS Skill Builder
AWS Cloud Practitioner Essentials





# Azure

#### A diferencia de otros proveedores, Azure exige un esquema jerárquico estricto para organizar la facturación, los permisos y los recursos:

Entidad Comercial / Tenant (Microsoft Entra ID)
  └── Grupos de Administración (Management Groups)
        └── Suscripciones (Subscriptions) -> Unidad de facturación
              └── Grupos de Recursos (Resource Groups) -> Contenedor lógico obligatorio
                    └── Recursos (VMs, Blob Storage, VNets, DBs)

                    
## Componentes de Infraestructura Global

### Regiones: Ubicaciones geográficas que alojan centros de datos (ej. East US, West Europe, Brazil South).

### Pares de Regiones (Region Pairs): Cada región se empareja automáticamente con otra dentro de la misma geografía a más de 400 km de distancia para aislamiento en emergencias y actualizaciones escalonadas.

### Zonas de Disponibilidad (Availability Zones): Ubicaciones físicas aisladas dentro de una región, con energía, red y refrigeración independientes.

### Azure Resource Manager (ARM): La capa de gestión unificada que procesa todas las solicitudes API (Portal, CLI, PowerShell, plantillas Bicep/ARM).



## Servicios Esenciales


### Identidad: Microsoft Entra ID
Autenticación, gestión de usuarios, SSO y RBAC.

### Cómputo (IaaS): Cómputo (IaaS)
Servidores virtuales Linux/Windows sobredemandados.

### Cómputo (PaaS): Azure App Service
Plataforma administrada para desplegar apps web y APIs (Node.js, Python, .NET).

### Serverless: Azure Functions
Código ejecutado por eventos sin gestión de servidores.

### Contenedores: Azure Kubernetes Service (AKS)
Orquestación de clústeres Kubernetes administrados.

### Almacenamiento: Azure Blob Storage
Almacenamiento de objetos no estructurados (archivos, imágenes).

### Redes: Azure Virtual Network (VNet)
Red privada virtual aislada y subredes.

### Seguridad de Red: Network Security Group (NSG)
Firewall con reglas de filtrado de tráfico inbound/outbound.

### Base de Datos (SQL): Azure SQL Database
Base de datos relacional administrada (PaaS) basada en SQL Server.

### Base de Datos (NoSQL): Azure Cosmos DB
Base de datos NoSQL multimodelo con distribución global de ultra baja latencia.



## Capas de Almacenamiento en Azure Blob Storage

Hot (Frecuente): Optimizado para datos en acceso constante.
Cool (Esporádico): Para datos almacenados por al menos 30 días con acceso poco frecuente.
Cold (Frío): Para datos con acceso mínimo almacenados por al menos 90 días.



## Práctica

Regístrate en Azure Free Account para obtener $200 USD en crédito (válidos por 30 días) más 12 meses de servicios populares gratuitos
Inicia sesión en el Azure Portal (portal.azure.com).

Asegurar la Cuenta y Configurar Presupuesto: Control de costos y seguridad
Ve a Microsoft Entra ID -> Users -> Tu usuario -> Security benefits y activa MFA.
Ve al buscador superior y abre Cost Management + Billing.
En la sección Budgets, crea un presupuesto mensual (ej. $5 USD) con una alerta por correo electrónico cuando el gasto supere el 80%.

Crear un Resource Group: Contenedor obligatorio para todo recurso
En el buscador ingresa Resource groups y haz clic en Create.
Nombre: rg-practica-azure.
Región: Selecciona la más cercana (ej. East US).
Haz clic en Review + create.

Primer Despliegue con Azure CLI: Uso de la CLI desde el navegador o terminal local
Abre la Cloud Shell en el icono >_ de la barra superior del portal
(o desde tu terminal local tras instalar az-cli y ejecutar az login).

Crea una aplicación web rápidamente usando App Service:

```
# Crear un Plan de App Service gratuito (F1)
az appservice plan create \
  --name plan-demo \
  --resource-group rg-practica-azure \
  --sku F1 --is-linux

# Crear la App Web con entorno Node.js o HTML estático
az webapp create \
  --name app-demo-azure-$RANDOM \
  --resource-group rg-practica-azure \
  --plan plan-demo \
  --runtime "NODE:20-lts"
```




# Kubernetes (K8s): plataforma de código abierto diseñada para automatizar el despliegue, el escalado, la red y la administración de aplicaciones en contenedores

Mientras que Docker se encarga de empaquetar y ejecutar un contenedor individual en un servidor
Kubernetes gestiona la orquestación de cientos o miles de contenedores distribuidos en un clúster de máquinas físicas o virtuales

### Autorecuperación (Self-healing): Reinicia automáticamente los contenedores que fallan, reemplaza y reprograma contenedores cuando un nodo muere.

### Escalado horizontal automático (Auto-scaling): Incrementa o reduce el número de contenedores en función del consumo de CPU, memoria o métricas personalizadas.

### Balanceo de carga y descubrimiento de servicios: Asigna una dirección IP única y un nombre DNS único para un conjunto de contenedores, distribuyendo el tráfico de red de forma equitativa.

### Despliegues sin interrupción (Rolling Updates): Actualiza versiones de código progresivamente sin tiempo de caída (zero-downtime) y permite revertir cambios (rollbacks) si detecta fallos.

### Gestión de configuración y secretos: Almacena y administra información sensible (claves API, tokens, contraseñas) sin reconstruir las imágenes de contenedor.


## 2. Arquitectura del Clúster

#### Un clúster de Kubernetes se divide en dos capas principales: el Control Plane (el cerebro organizador) y los Worker Nodes (las máquinas que ejecutan las aplicaciones).


Control Plane (Master Node)
  ├── kube-apiserver           (Punto de entrada API REST / kubectl)
  ├── etcd                     (Base de datos clave-valor del estado del clúster)
  ├── kube-scheduler          (Asigna Pods a Nodos según recursos)
  └── kube-controller-manager  (Garantiza el estado deseado)
         │
         ▼ (Comunicación mediante red interna)
         │
Worker Nodes 
  ├── kubelet                  (Agente en cada nodo que ejecuta las órdenes)
  ├── kube-proxy               (Mantiene las reglas de red e IP virtual)
  └── Container Runtime        (Motor de contenedores: containerd, CRI-O)
        └── Pods               (Contenedores en ejecución)

#### kube-apiserver: Expone la API REST de Kubernetes. Es la única vía de comunicación para los usuarios (kubectl) y para los componentes internos.

#### etcd: Base de datos distribuida de alta disponibilidad que guarda el estado real de todo el clúster en formato clave-valor.

#### kube-scheduler: Evalúa los requerimientos de CPU/Memoria de las aplicaciones y decide en qué nodo específico debe ejecutarse cada nuevo contenedor.

#### kube-controller-manager: Monitorea continuamente el estado del clúster mediante bucles de control y ejecuta acciones correctivas si el estado actual difiere del estado deseado.


Componentes de los Worker Nodes

#### kubelet: Agente principal que corre en cada nodo y asegura que los contenedores descritos en las especificaciones estén funcionando correctamente.

#### kube-proxy: Gestiona las reglas de red en cada nodo para permitir la comunicación entre contenedores dentro del clúster y con el tráfico externo.    

#### Container Runtime: Software responsable de ejecutar los contenedores (como containerd o CRI-O).


Objetos y Abstracciones Fundamentales


Objeto K8s:

### Pod: La unidad de cómputo ejecutable más pequeña en K8s.
Envuelve uno o más contenedores que comparten almacenamiento e IP de red.
Desplegar un proceso o contenedor principal.

### Deployment: Define el estado deseado para un conjunto de Pods idénticos
(ej. número de réplicas, versión de la imagen).
Administrar aplicaciones stateless (sin estado), escalado y actualizaciones.

### Service: Abstracción de red estable que expone un conjunto de Pods mediante una IP virtual o nombre DNS.
Permitir que una API acceda a una base de datos o que un cliente acceda al frontend.

### Ingress: Enrutador HTTP/HTTPS de Capa 7 que gestiona el acceso externo a los servicios dentro del clúster.
Configurar dominios, rutas /api, certificados SSL/TLS y balanceo HTTP.

### ConfigMap / Secret: Mecanismos para inyectar variables de entorno o archivos de configuración sin modificar la imagen de Docker.
Guardar variables no sensibles (ConfigMap) o contraseñas y tokens (Secret).

### PersistentVolumeClaim (PVC)
Solicitud de almacenamiento persistente independiente del ciclo de vida del Pod.
Guardar datos en bases de datos o sistemas de archivos persistentes.



## Práctica

Declarativo en YAML
En Kubernetes se trabaja de forma declarativa: se redacta un archivo YAML especificando el estado deseado y K8s se encarga de alcanzarlo y mantenerlo.

```
# 1. Definición del Deployment (Aplicación Web)
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mi-web-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: mi-web
  template:
    metadata:
      labels:
        app: mi-web
    spec:
      containers:
      - name: nginx
        image: nginx:1.25-alpine
        ports:
        - containerPort: 80
---
# 2. Definición del Service (Exposición de Red)
apiVersion: v1
kind: Service
metadata:
  name: mi-web-service
spec:
  type: ClusterIP
  selector:
    app: mi-web
  ports:
  - port: 80
    targetPort: 80
```


Comandos Esenciales de kubectl

```
# Aplicar un archivo de configuración (Crear o Actualizar recursos)
kubectl apply -f manifest.yaml

# Consultar el estado de los recursos
kubectl get pods
kubectl get services
kubectl get deployments

# Obtener información detallada y eventos de un recurso específico
kubectl describe pod <nombre-del-pod>

# Ver logs de ejecución de un contenedor dentro de un Pod
kubectl logs -f <nombre-del-pod>

# Abrir una terminal interactiva dentro de un contenedor en ejecución
kubectl exec -it <nombre-del-pod> -- /bin/sh

# Eliminar los recursos definidos en un manifiesto
kubectl delete -f manifest.yaml
```



## k8s y Docker

#### Arquitecturas modernas los adoptan porque resuelven los dos mayores problemas del desarrollo y despliegue de software
#####la consistencia del  entorno (Docker) y la gestión de la infraestructura a escala (Kubernetes).


### Docker: Empaquetado y Consistencia
Antes de los contenedores, el desarrollo de software sufría constantemente del problema: "En mi máquina funciona, pero en el servidor de producción no".
Esto ocurría por diferencias en versiones de bibliotecas, sistemas operativos o dependencias del sistema.

Empaquetado unificado: Docker empaqueta la aplicación junto con su runtime (ej. Node.js, Python, .NET), dependencias, archivos de configuración y variables en una imagen de contenedor.
Aislamiento y portabilidad: Un contenedor se ejecuta exactamente de la misma manera en tu laptop (Linux, macOS, Windows) que en un servidor en la nube.
Eficiencia: A diferencia de una Máquina Virtual (VM) —que requiere instalar un sistema operativo completo con su propio kernel—, los contenedores comparten el kernel del sistema operativo host
Esto los hace extremadamente ligeros: arrancan en milisegundos y consumen muy poca memoria RAM.


### Kubernetes: Orquestación y Escala

Docker por sí solo gestiona contenedores en un único servidor
##### Sin embargo, cuando tu aplicación crece a miles de usuarios o se divide en docenas de microservicios, surgen retos que Docker no puede resolver por sí mismo

¿Qué ocurre si el servidor donde corre el contenedor se apaga o falla el hardware?

¿Cómo distribuyes el tráfico entrante entre 20 copias de la misma app?

¿Cómo actualizas la aplicación a una versión nueva sin cortar el servicio a los usuarios?


Entra Kubernetes (K8s) para administrar un clúster de múltiples servidores:

Autorecuperación (Self-healing): Si un contenedor se cuelga o un servidor cae, Kubernetes detecta el fallo y recrea el contenedor en otro servidor sano automáticamente.
Escalado Automático: Ajusta el número de contenedores en tiempo real según el consumo de CPU, memoria o número de peticiones.
Balanceo de Carga: Asigna una IP virtual y distribuye equitativamente las solicitudes entre todos los contenedores disponibles.
Actualizaciones sin Caída (Zero-Downtime Rollouts): Reemplaza los contenedores de la versión anterior por la nueva versión de forma progresiva. Si la nueva versión falla, hace un rollback automático.

```
App: código y la lógica de negocio.
 |
Docker: Contenedor estandarizado: Aísla y empaqueta en una caja con dimensiones universales
 |
Kubernetes: Organiza miles de contenedores, balancea el peso, reemplaza los dañados y coordina la logística. 	
```

### 1. MVP inicial: Docker. servicios PaaS sencillos como Vercel, Render, Railway o un VPS individual. k8s agrega complejidad

### 2. App web monolítica con tráfico moderado: Docker. k8s opcional. Docker facilita el deploy. Servidores administrados (AWS App Runner, GCP Cloud Run) ejecutan el contenedor sin configurar K8s.

### 3. Arquitectura de Microservicios o Gran Escala: Administrar decenas de contenedores interconectados en múltiples servidores manualmente es inviable sin un orquestador como K8s.


