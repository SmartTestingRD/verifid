const en = {
    "kyc-compliance": {
        title: "KYC Compliance",
        subtitle: "One verification platform for any regulation or market",
        heroDesc: "Verify users in seconds with AI-driven Identity Verification (IDV) and Proof of Address (PoA). Designed with strict security and compliance measures in mind.",
        visualType: "document",
        features: [
            { icon: "🛡️", title: "Liveness & Face Match", desc: "Advanced anti-spoofing technology to ensure the user is present." },
            { icon: "📄", title: "Document Authentication", desc: "OCR and MRZ data extraction with deep authenticity checks." },
            { icon: "🌍", title: "Global Coverage", desc: "Support for 14,000+ document types across 220+ countries and territories." },
            { icon: "⚡", title: "High Conversion", desc: "Frictionless unified flow that verifies legitimate users in under 50 seconds." }
        ],
        howItWorks: [
            { step: "1", title: "Document Capture", desc: "User scans ID via mobile or web SDK with real-time blur/glare detection." },
            { step: "2", title: "Liveness Check", desc: "User performs a quick 3D face scan to prove presence and prevent injection attacks." },
            { step: "3", title: "AI Analysis", desc: "Engine cross-references facial biometrics with document photo and extracts MRZ data." },
            { step: "4", title: "Decision Engine", desc: "Automated approval or routing for manual review based on custom thresholds." },
        ]
    },
    "aml-transaction-monitoring": {
        title: "AML Transaction Monitoring",
        subtitle: "Real-time risk scoring for dynamic compliance",
        heroDesc: "Monitor your users continuously against global watchlists, PEP databases, and adverse media to ensure ongoing AML and CFT compliance.",
        visualType: "core",
        stats: [
            { value: "10K+", label: "Global Data Sources" },
            { value: "300ms", label: "Average Response Time" },
            { value: "40%", label: "Reduction in False Positives" }
        ],
        features: [
            { icon: "🕵️", title: "Continuous Monitoring", desc: "Automated daily checks against global watchlists." },
            { icon: "⚙️", title: "Dynamic Risk Rules", desc: "Customize thresholds to automatically decline or escalate risky profiles." },
            { icon: "📉", title: "Reduced False Positives", desc: "Machine learning algorithms fine-tune alerts to minimize manual review time." },
            { icon: "📋", title: "Instant Reporting", desc: "Generate SARs and audit trails aligned with global regulators." }
        ]
    },
    "business-verification": {
        title: "KYB (Business Verification)",
        subtitle: "Automated corporate onboarding and UBO discovery",
        heroDesc: "Onboard business clients safely and swiftly by automatically extracting company data, resolving organizational structures, and verifying Ultimate Beneficial Owners (UBOs).",
        visualType: "network",
        howItWorks: [
            { step: "1", title: "Company Look-up", desc: "Input registration number to pull automated registry data." },
            { step: "2", title: "Document Parsing", desc: "AI extracts shareholder data from complex Articles of Association." },
            { step: "3", title: "UBO Discovery", desc: "Algorithm unwinds ownership layers to find ultimate beneficial owners." },
            { step: "4", title: "KYC Integration", desc: "Frictionless KYC invites sent to identified directors and UBOs." }
        ],
        features: [
            { icon: "🏢", title: "Registry Connections", desc: "Direct API access to commercial registries in 200+ countries." },
            { icon: "🔗", title: "UBO Discovery", desc: "Visualize complex ownership structures and identify ultimate beneficiaries." },
            { icon: "📊", title: "Corporate AML", desc: "Screen directors, shareholders, and businesses against global sanctions." },
            { icon: "🚀", title: "Accelerated Deployment", desc: "Reduce business onboarding time from weeks to minutes." }
        ]
    },
    "aml-compliance": {
        title: "AML Compliance Infrastructure",
        subtitle: "End-to-end Money Laundering Prevention",
        heroDesc: "A complete framework to assess risk at onboarding, monitor behavior continuously, and report suspicious activities without straining your compliance team.",
        visualType: "shield",
        stats: [
            { value: "220+", label: "Countries Covered" },
            { value: "0", label: "Regulatory Fines" },
            { value: "24/7", label: "Continuous Monitoring" }
        ],
        features: [
            { icon: "⚖️", title: "Risk Scoring", desc: "Assign dynamic risk levels based on jurisdiction, behavior, and matches." },
            { icon: "🔍", title: "Case Management", desc: "Unified dashboard to investigate alerts, escalate cases, and manage team workflows." },
            { icon: "📝", title: "Audit Ready Logs", desc: "Cryptographically signed evidence of every compliance check performed." },
            { icon: "🌐", title: "Multi-Jurisdiction", desc: "Adapt compliance protocols on the fly for EU (AMLD6), US (FinCEN), or LATAM frameworks." }
        ]
    },
    "age-verification": {
        title: "Age Verification",
        subtitle: "Protect minors while keeping adult conversion high",
        heroDesc: "Implement non-intrusive age estimation and definitive ID verification to comply with local age gating laws for iGaming, crypto, and restricted commerce.",
        visualType: "face",
        howItWorks: [
            { step: "1", title: "Facial Input", desc: "User looks at the camera for a split-second scan." },
            { step: "2", title: "AI Estimation", desc: "Neural network estimates age without saving the photo." },
            { step: "3", title: "Challenge", desc: "If estimated age is near threshold, full ID scan is requested." },
            { step: "4", title: "Access Granted", desc: "User proceeds to age-restricted content securely." }
        ],
        features: [
            { icon: "👤", title: "Facial Age Estimation", desc: "Approve users instantly using biometric age estimation without full KYC." },
            { icon: "🪪", title: "Hard ID Checks", desc: "Fallback to document verification for borderline cases." },
            { icon: "🔒", title: "Privacy First", desc: "Zero-knowledge proof infrastructure ensures no PII is stored unnecessarily." },
            { icon: "📱", title: "Cross-Platform", desc: "Seamless Web, iOS, and Android SDK integration." }
        ]
    },
    "travel-rule": {
        title: "Travel Rule Compliance",
        subtitle: "Seamless crypto asset transfers",
        heroDesc: "Comply with FATF Recommendation 16 for Virtual Asset Service Providers (VASPs). Identify originators and beneficiaries for crypto transactions over threshold.",
        visualType: "network",
        stats: [
            { value: "10+", label: "Protocols Supported" },
            { value: "100%", label: "FATF Aligned" },
            { value: "<1s", label: "Check Latency" }
        ],
        features: [
            { icon: "🔗", title: "Protocol Agnostic", desc: "Communicate securely across multiple VASP networks and protocols." },
            { icon: "👛", title: "Self-Hosted Wallets", desc: "Verify unhosted wallet ownership before authorizing transfers." },
            { icon: "🛑", title: "Pre-Transaction Checking", desc: "Halt risky transfers instantly if counterparty VASP fails compliance checks." },
            { icon: "📊", title: "Unified Dashboard", desc: "Manage fiat AML and crypto Travel Rule alerts in the same case manager." }
        ]
    },
    "fraud-prevention": {
        title: "Fraud Prevention Ecosystem",
        subtitle: "Stop synthetic identity and deepfakes",
        heroDesc: "A multi-layered defense shield that analyzes behavioral signals, device intelligence, and deep network linkages to stop organized fraud rings.",
        visualType: "shield",
        stats: [
            { value: "99.9%", label: "Deepfake Detection Rate" },
            { value: "50+", label: "Risk Signals Analyzed" },
            { value: "$0", label: "Lost to Injection Attacks" }
        ],
        howItWorks: [
            { step: "1", title: "Signal Collection", desc: "Gather IP, device hash, and typing behavior silently." },
            { step: "2", title: "Graph Linkage", desc: "Compare metadata against known fraud rings." },
            { step: "3", title: "Liveness Challenge", desc: "Deploy active 3D face verification for suspicious profiles." },
            { step: "4", title: "Decision", desc: "Block bots instantly, approve humans." }
        ],
        features: [
            { icon: "🤖", title: "Deepfake Detection", desc: "Industry-leading injection attack and synthetic media prevention." },
            { icon: "🕸️", title: "Link Analysis", desc: "Identify connections between users based on shared devices, IP, or behavior." },
            { icon: "🎯", title: "Behavioral Biometrics", desc: "Analyze typing cadence, mouse movements, and navigation habits to detect bots." },
            { icon: "📉", title: "Chargeback Reduction", desc: "Pinpoint fraudulent intent before point-of-sale to save revenue." }
        ]
    },
    "digital-footprint-checker": {
        title: "Digital Footprint Checker",
        subtitle: "Silent verification via social and digital signals",
        heroDesc: "Assess user authenticity instantly using email, phone, and social media data without requiring them to scan an ID document.",
        visualType: "network",
        features: [
            { icon: "✉️", title: "Email Intelligence", desc: "Verify domain age, breach history, and social network associations." },
            { icon: "📱", title: "Phone Reputation", desc: "Check carrier data, roaming status, and VOIP indicators." },
            { icon: "🌍", title: "IP & Proxy Detection", desc: "Uncover hidden locations, VPN usage, and Tor exit nodes." },
            { icon: "⚡", title: "Zero Friction", desc: "Background checks that require zero effort from the end user." }
        ]
    },
    "money-muling": {
        title: "Money Muling Prevention",
        subtitle: "Detect and dismantle illicit money networks",
        heroDesc: "Identify accounts being used to funnel illegal funds by monitoring transactional anomalies and unexpected behavioral shifts post-onboarding.",
        visualType: "core",
        stats: [
            { value: "85%", label: "Increase in Mule Catch Rate" },
            { value: "24/7", label: "Behavioral Profiling" },
            { value: "Real-time", label: "Account Freezing" }
        ],
        features: [
            { icon: "💸", title: "Velocity Checks", desc: "Flag rapid deposits and immediate withdrawals characteristic of muling." },
            { icon: "📍", title: "Geo-Velocity", desc: "Detect impossible travel or concurrent multi-country logins." },
            { icon: "🎭", title: "Account Takeover Signs", desc: "Spot device or behavioral changes indicating the account was sold." },
            { icon: "🕸️", title: "Network Graphs", desc: "Visualize funds flowing from high-risk originators into central muling accounts." }
        ]
    },
    "payment-fraud": {
        title: "Payment Fraud Prevention",
        subtitle: "Secure every transaction in real-time",
        heroDesc: "Protect your ecosystem from stolen credit cards, friendly fraud, and unauthorized transfers through advanced machine learning models.",
        visualType: "shield",
        howItWorks: [
            { step: "1", title: "Checkout Initiation", desc: "Customer enters payment details." },
            { step: "2", title: "Risk Engine Check", desc: "Cross-checks card BIN, IP, and history in 100ms." },
            { step: "3", title: "Dynamic Routing", desc: "Clean payments proceed; risky payments routed to 3DS." },
            { step: "4", title: "Fulfillment", desc: "Zero-chargeback transaction completed." }
        ],
        features: [
            { icon: "💳", title: "BIN Checks & 3D Secure", desc: "Route high-risk transactions through dynamic 3DS challenges." },
            { icon: "🛒", title: "Merchant Protection", desc: "Safeguard marketplaces against seller-side and buyer-side fraud." },
            { icon: "🧠", title: "Custom ML Models", desc: "Train algorithms explicitly on your industry's unique fraud vectors." },
            { icon: "📈", title: "Acceptance Optimization", desc: "Maximize legitimate approvals while keeping chargeback ratios at near-zero." }
        ]
    },
    "account-takeover": {
        title: "Account Takeover (ATO) Protection",
        subtitle: "Lock down user accounts from unauthorized access",
        heroDesc: "Prevent bad actors from hijacking legitimate accounts by enforcing continuous biometric authentication and device monitoring.",
        visualType: "face",
        stats: [
            { value: "99.99%", label: "Login Accuracy" },
            { value: "1.2s", label: "Authentication Time" },
            { value: "0", label: "Passwords Stolen" }
        ],
        features: [
            { icon: "📱", title: "Device Fingerprinting", desc: "Recognize trusted devices and flag suspicious new logins." },
            { icon: "👤", title: "Face Recognition Login", desc: "Replace passwords with 1-second facial biometric authentication." },
            { icon: "🚨", title: "Anomaly Alerts", desc: "Trigger step-up authentication if user behavior suddenly deviations." },
            { icon: "🔐", title: "Secure Recovery", desc: "Automated, biometric-based account recovery flows for locked users." }
        ]
    },
    "multi-accounting": {
        title: "Multi-Accounting Prevention",
        subtitle: "Stop bonus abuse and spam networks",
        heroDesc: "Ensure one person equals one account. Eliminate duplicate sign-ups to protect promotional campaigns and maintain platform integrity.",
        visualType: "network",
        howItWorks: [
            { step: "1", title: "Account Creation", desc: "User attempts to generate a new profile." },
            { step: "2", title: "Biometric Hash", desc: "Face and document hashes are created." },
            { step: "3", title: "DB Cross-check", desc: "Hashes run against millions of existing users instantly." },
            { step: "4", title: "Deduplication", desc: "Matches are flagged and blocked from claiming bonuses." }
        ],
        features: [
            { icon: "🎭", title: "Biometric Deduplication", desc: "Cross-reference new faces against your entire existing user database in milliseconds." },
            { icon: "📱", title: "Device Linkage", desc: "Catch sophisticated users creating accounts from the same device farm." },
            { icon: "🎁", title: "Bonus Abuse Blocking", desc: "Automatically deny promotional rewards to users flagged as duplicates." },
            { icon: "📊", title: "Similarity Scoring", desc: "Identify users submitting similar documents with slight name variations." }
        ]
    },
    "protocols": {
        title: "Travel Rule Protocols Integration",
        subtitle: "Seamless global network connectivity",
        heroDesc: "Connect with the largest global VASP networks through a single unified API to exchange requisite originator and beneficiary data.",
        visualType: "core",
        features: [
            { icon: "🌐", title: "Multi-Protocol Support", desc: "Integrate once to connect with Notabene, TRP, VerifyVASP, and more." },
            { icon: "🔐", title: "Secure Messaging", desc: "End-to-end encrypted packet transmission between compliant institutions." },
            { icon: "⚙️", title: "Automated Routing", desc: "Automatically discover the recipient's VASP and select the optimal protocol." },
            { icon: "📋", title: "Regulatory Reporting", desc: "Generate standardized reports for local financial oversight bodies." }
        ]
    },
    "kyc-automation": {
        title: "KYC Automation Platform",
        subtitle: "Scale onboarding without scaling headcount",
        heroDesc: "Empower your operations with a fully automated identity platform that handles data extraction, risk scoring, and decisioning with human-like precision.",
        visualType: "document",
        features: [
            { icon: "⚡", title: "90% Auto-Approval", desc: "Let the AI handle the straightforward cases so compliance officers can focus on edge cases." },
            { icon: "📐", title: "Drag-and-Drop Workflows", desc: "Visually build conditional logic flows without writing a line of code." },
            { icon: "🤖", title: "AI-Powered Extraction", desc: "Highest accuracy OCR for unstructured and non-standard documents." },
            { icon: "🌍", title: "Localized Interfaces", desc: "Automatically adapt language and document requirements based on user IP." }
        ]
    }
};

const es = {
    "kyc-compliance": {
        title: "Cumplimiento KYC",
        subtitle: "Una plataforma de verificación para cualquier regulación o mercado",
        heroDesc: "Verifica a tus usuarios en segundos con Verificación de Identidad (IDV) impulsada por IA y Comprobante de Domicilio (PoA). Diseñado con estrictas medidas de seguridad y cumplimiento normativo.",
        visualType: "document",
        features: [
            { icon: "🛡️", title: "Prueba de Vida y Coincidencia Facial", desc: "Tecnología anti-falsificación avanzada para asegurar que el usuario esté presente." },
            { icon: "📄", title: "Autenticación de Documentos", desc: "Extracción de datos OCR y verificación profunda de autenticidad." },
            { icon: "🌍", title: "Cobertura Global", desc: "Soporte para más de 14,000 tipos de documentos en más de 220 países y territorios." },
            { icon: "⚡", title: "Alta Conversión", desc: "Flujo unificado sin fricciones que verifica usuarios legítimos en menos de 50 segundos." }
        ],
        howItWorks: [
            { step: "1", title: "Captura de Documentos", desc: "El usuario escanea su ID vía móvil con detección de desenfoque y brillo en tiempo real." },
            { step: "2", title: "Prueba de Vida", desc: "El usuario realiza un escaneo facial 3D rápido para probar su presencia." },
            { step: "3", title: "Análisis de IA", desc: "El motor cruza la biometría facial con la foto del documento." },
            { step: "4", title: "Motor de Decisión", desc: "Aprobación o rechazo automatizado basado en umbrales de riesgo." },
        ]
    },
    "aml-transaction-monitoring": {
        title: "Monitoreo de Transacciones AML",
        subtitle: "Puntuación de riesgo en tiempo real para cumplimiento dinámico",
        heroDesc: "Monitorea a tus usuarios continuamente contra listas de vigilancia globales, bases de datos PEP y medios adversos para garantizar el cumplimiento AML y CFT.",
        visualType: "core",
        stats: [
            { value: "10K+", label: "Fuentes de Datos Globales" },
            { value: "300ms", label: "Tiempo Medio de Respuesta" },
            { value: "40%", label: "Reducción de Falsos Positivos" }
        ],
        features: [
            { icon: "🕵️", title: "Monitoreo Continuo", desc: "Chequeos diarios automatizados contra listas de vigilancia globales." },
            { icon: "⚙️", title: "Reglas Dinámicas de Riesgo", desc: "Personaliza umbrales para declinar automáticamente perfiles dudosos." },
            { icon: "📉", title: "Falsos Positivos Reducidos", desc: "Algoritmos de aprendizaje automático ajustan las alertas." },
            { icon: "📋", title: "Reportes Instantáneos", desc: "Genera registros de auditoría alineados con los reguladores mundiales." }
        ]
    },
    "business-verification": {
        title: "KYB (Verificación de Empresas)",
        subtitle: "Inscripción corporativa automatizada",
        heroDesc: "Incorpora clientes comerciales de forma rápida y segura mediante la extracción automática de datos de la empresa y la verificación de Beneficiarios Finales (UBOs).",
        visualType: "network",
        howItWorks: [
            { step: "1", title: "Búsqueda de Empresa", desc: "Ingrese el número de registro para extraer datos automatizados del registro." },
            { step: "2", title: "Análisis de Documentos", desc: "La IA extrae datos de los Accionistas de documentos complejos." },
            { step: "3", title: "Descubrimiento UBO", desc: "Descubrimiento de capas de propiedad para encontrar a los UBO." },
            { step: "4", title: "Integración KYC", desc: "Se envían invitaciones KYC sin fricciones a directores." }
        ],
        features: [
            { icon: "🏢", title: "Conexiones de Registro", desc: "Acceso API directo a registros comerciales en más de 200 países." },
            { icon: "🔗", title: "Descubrimiento de UBO", desc: "Visualice estructuras de propiedad complejas." },
            { icon: "📊", title: "AML Corporativo", desc: "Examine directores, accionistas contra sanciones globales." },
            { icon: "🚀", title: "Implementación Acelerada", desc: "Reduzca el tiempo de incorporación de empresas de semanas a minutos." }
        ]
    },
    "aml-compliance": {
        title: "Infraestructura de Cumplimiento AML",
        subtitle: "Prevención de Lavado de Dinero de extremo a extremo",
        heroDesc: "Un marco completo para evaluar el riesgo en la incorporación, monitorear el comportamiento continuamente y reportar actividades sospechosas.",
        visualType: "shield",
        stats: [
            { value: "220+", label: "Países Cubiertos" },
            { value: "0", label: "Multas Regulatorias" },
            { value: "24/7", label: "Monitoreo Continuo" }
        ],
        features: [
            { icon: "⚖️", title: "Puntuación de Riesgo", desc: "Asigne niveles de riesgo dinámicos basados en la jurisdicción." },
            { icon: "🔍", title: "Gestión de Casos", desc: "Panel unificado para investigar alertas y escalar casos." },
            { icon: "📝", title: "Evidencia Criptográfica", desc: "Evidencia firmada de cada verificación de cumplimiento realizada." },
            { icon: "🌐", title: "Multijurisdicción", desc: "Adapte los protocolos de cumplimiento para Europa o LATAM en vivo." }
        ]
    },
    "age-verification": {
        title: "Verificación de Edad",
        subtitle: "Protege a los menores manteniendo alta la conversión",
        heroDesc: "Implementa una estimación de edad no intrusiva y verificación definitiva de ID para cumplir con las leyes de edad en tu mercado.",
        visualType: "face",
        howItWorks: [
            { step: "1", title: "Cámara Abierta", desc: "El usuario mira a la cámara para un escaneo de fracción de segundo." },
            { step: "2", title: "Estimación IA", desc: "Red neuronal calcula la edad sin guardar la foto." },
            { step: "3", title: "Desafío", desc: "Si la edad dudosa, se solicita un escaneo completo de identificación." },
            { step: "4", title: "Aprobación", desc: "El usuario accede con seguridad de forma instántanea." }
        ],
        features: [
            { icon: "👤", title: "Estimación Facial de Edad", desc: "Apruebe a los usuarios con estimación de edad biométrica." },
            { icon: "🪪", title: "Controles Físicos", desc: "Verificación de documentos físicos solo para casos límite." },
            { icon: "🔒", title: "Privacidad Primero", desc: "La infraestructura garantiza que no se almacene PII innecesariamente." },
            { icon: "📱", title: "Plataformas", desc: "Integración perfecta de SDK para Web, iOS y Android." }
        ]
    },
    "travel-rule": {
        title: "Cumplimiento Travel Rule",
        subtitle: "Transferencias de activos sin problemas",
        heroDesc: "Cumpla con la Recomendación 16 del GAFI para los Proveedores de Servicios de Activos Virtuales (VASP).",
        visualType: "network",
        stats: [
            { value: "10+", label: "Protocolos Soportados" },
            { value: "100%", label: "Alineado a GAFI" },
            { value: "<1s", label: "Latencia Mínima" }
        ],
        features: [
            { icon: "🔗", title: "Agnóstico a Protocolos", desc: "Múltiples redes VASP y protocolos con seguridad." },
            { icon: "👛", title: "Billeteras Propias", desc: "Verifique la propiedad de la billetera antes de la transferencia." },
            { icon: "🛑", title: "Revisión Pre-Transacción", desc: "Detenga fondos de forma instantánea ante contrapartes fallidas." },
            { icon: "📊", title: "Panel Unificado", desc: "Gestione las alertas AML fiduciarias y Travel rule en un mismo gestor." }
        ]
    },
    "fraud-prevention": {
        title: "Prevención de Fraude",
        subtitle: "Detenga identidades sintéticas",
        heroDesc: "Un escudo de defensa de múltiples capas que analiza señales de comportamiento e inteligencia para detener el fraude organizado.",
        visualType: "shield",
        stats: [
            { value: "99.9%", label: "Tasa Detección Deepfake" },
            { value: "50+", label: "Señales Analizadas" },
            { value: "$0", label: "Dinero Perdido" }
        ],
        howItWorks: [
            { step: "1", title: "Recolección", desc: "Recopila IP, hash de dispositivo y escritura silenciosamente." },
            { step: "2", title: "Enlace", desc: "Análisis de Grafos para comparar patrones." },
            { step: "3", title: "Biometría", desc: "Implemeta verificación facial 3D en milisegundos." },
            { step: "4", title: "Decisión", desc: "Bloquee bots al instante, apruebe a los humanos." }
        ],
        features: [
            { icon: "🤖", title: "Detección de Deepfakes", desc: "Prevención anti-spoofing e inteligencia sintética." },
            { icon: "🕸️", title: "Análisis de Grafos", desc: "Identifique conexiones de redes fraudulentas de la Dark Web." },
            { icon: "🎯", title: "Biometría de Comportamiento", desc: "Analice patrones de navegación para detectar bots." },
            { icon: "📉", title: "Corte de Contracargos", desc: "Corte transacciones fraudulentas de raíz perdiendo nada." }
        ]
    },
    "digital-footprint-checker": {
        title: "Verificación de Huella Digital",
        subtitle: "Verificación silenciosa sin fricción",
        heroDesc: "Evalúe la autenticidad al instante utilizando el correo electrónico y teléfono sin requerir escanear un documento físico.",
        visualType: "network",
        features: [
            { icon: "✉️", title: "Inteligencia de Email", desc: "Antigüedad del dominio, filtraciones y redes sociales." },
            { icon: "📱", title: "Reputación Telefónica", desc: "Datos de operadora, Roaming e indicadores VoIP." },
            { icon: "🌍", title: "IP & Proxy", desc: "Ubicaciones encubiertas, nodos Tor y redes de la Dark web." },
            { icon: "⚡", title: "Sin Fricciones", desc: "Rechace el fraude silenciosamente sin que el usuario haga esfuerzo." }
        ]
    },
    "money-muling": {
        title: "Prevención Money Muling",
        subtitle: "Detecte y desmantele redes ilegales",
        heroDesc: "Identifique cuentas que se utilizan para canalizar activos ilegales mediante anomalías en transacciones repentinas.",
        visualType: "core",
        stats: [
            { value: "85%", label: "Tasa Mayor de Interceptación" },
            { value: "24/7", label: "Generación de Perfiles" },
            { value: "Milisegundos", label: "Bloqueo Congelado" }
        ],
        features: [
            { icon: "💸", title: "Velocidad de Caja", desc: "Movimientos excesivos de flujos de capital detectados en vivo." },
            { icon: "📍", title: "Geo-Velocidad", desc: "Detecte ubicaciones e inicios de sesion distorsionados en países dudosos." },
            { icon: "🎭", title: "Account Takeover", desc: "Verifique inmediatamente si la cuenta bancaria de un cliente fue secuestrada." },
            { icon: "🕸️", title: "Análisis Geográfico", desc: "Venza organizaciones masivas centralizando puntos de red sospechosa." }
        ]
    },
    "payment-fraud": {
        title: "Fraude de Pagos",
        subtitle: "Asegure cada transacción en tiempo real",
        heroDesc: "Proteja su ecosistema contra tarjetas de crédito robadas, fraude amistoso y transferencias no autorizadas mediante Machine Learning inteligente.",
        visualType: "shield",
        howItWorks: [
            { step: "1", title: "Checkout", desc: "El cliente ingresa los detalles de pago de forma usual." },
            { step: "2", title: "Evaluación IP", desc: "Verificación de BIN, historial, y Proxy en menos de 100ms." },
            { step: "3", title: "3DS Dinámico", desc: "Los pagos sospechosos entran en escrutinio riguroso 3DS2." },
            { step: "4", title: "Cumplimiento", desc: "Venda exitosamente con margen cero riesgo y de Chargebacks." }
        ],
        features: [
            { icon: "💳", title: "Controles BIN y 3D Secure", desc: "Reúna información contextual para rechazar tarjetas comprometidas." },
            { icon: "🛒", title: "Protección Mercader", desc: "Evita devoluciones innecesarias para asegurar el bolsillo de su compañía." },
            { icon: "🧠", title: "Modelado Computacional", desc: "Nuestro propio sistema aprende contínuamente sobre vectores peligrosos diarios." },
            { icon: "📈", title: "Tasas de Recolección", desc: "Su cuenta permanecerá inamovible frente a los contracargos financieros." }
        ]
    },
    "account-takeover": {
        title: "Protección Account Takeover (ATO)",
        subtitle: "Asegure las cuentas de intrusos",
        heroDesc: "Evite que actores maliciosos secuestren cuentas legítimas obligando a métodos de autenticación biométrica silenciosos o en tiempo real.",
        visualType: "face",
        stats: [
            { value: "99.99%", label: "Exactitud Liveness" },
            { value: "1.2s", label: "Tiempo Típico" },
            { value: "0", label: "Contraseñas Robadas" }
        ],
        features: [
            { icon: "📱", title: "Huelas en el Dispositivo", desc: "Dispositivos recurrentes permitidos o congelados según confianza histórica." },
            { icon: "👤", title: "Acceso Facial Login", desc: "Eliminamos las claves inseguras forzando un Face Match único biológico." },
            { icon: "🚨", title: "Agente Anomalía", desc: "Los saltos de patrón o dispositivo activan el SMS OTP obligatoriamente de inmediato." },
            { icon: "🔐", title: "Backup de Supervivencia", desc: "Los clientes de verdad reiniciarán su cuenta con biometría legal sólida en dos pasos." }
        ]
    },
    "multi-accounting": {
        title: "Freno al Multi-Accounting",
        subtitle: "No regale más dinero en campañas promocionales",
        heroDesc: "Evite la proliferación masiva de clones durante sorteos con Face Match global y bloqueé intentos descarados garantizando un solo ID por cada perfil humano.",
        visualType: "network",
        howItWorks: [
            { step: "1", title: "Ingreso", desc: "Al abrir una promoción en web, el humano introduce sus datos." },
            { step: "2", title: "Hashing Facial", desc: "Nuestra nube generara el archivo en texto sobre proporciones del rostro y cartón visual." },
            { step: "3", title: "Exploración Rápida", desc: "Buscaremos a este mismo rostro en millones de perfiles tuyos en 200 milisegundos." },
            { step: "4", title: "Congelamiento", desc: "Bloquearemos la asignación de dinero / tickets anulando fraude colosal de granjas roboticas." }
        ],
        features: [
            { icon: "🎭", title: "Cacería Global por BD", desc: "Cientos de miles de usuarios comparados biométricamente sin comprometer tu servidor nunca." },
            { icon: "📱", title: "Firmas UUID", desc: "No solo paramos el clon virtual; detectamos teléfonos o laptops granja de inmediato para vetarlas." },
            { icon: "🎁", title: "Anti Promocional Múltiple", desc: "Nadie usará más veces de las justas el dinero dedicado de tu departamento de Marketing o Fidelidad." },
            { icon: "📊", title: "Vectorizado Abstracto", desc: "Evita fraude en base a variaciones milimétricas de nombres usando biometría dura irreversible con encriptación fuerte del lado matemático." }
        ]
    },
    "protocols": {
        title: "Travel Rule (Protocolos)",
        subtitle: "Las autopistas regulatorias de Crypto más veloces",
        heroDesc: "Integra al mejor conector VASPs del sistema descentralizado global compartiendo mensajes y firmas que la legislación exije inmediatamente sin retrasos al enviar dineros.",
        visualType: "core",
        features: [
            { icon: "🌐", title: "Directrices", desc: "VASP o Notabene al final en nuestro mismo Framework global." },
            { icon: "🔐", title: "Blockchain Seguro", desc: "Los orígenes nunca serán manipulados entre tú y una casa de cambio Europea si todo se firma asimétricamente." },
            { icon: "⚙️", title: "Descubrimiento Red", desc: "Encuentra el Protocol correcto como DNS en microsegundos y lánzale los ficheros legales automatizados." },
            { icon: "📋", title: "Impresora Reportes", desc: "Un Excel, un JSON o un PDF a tu Banco Central demostrando el control integral de flujos de capital con solo dos clicks." }
        ]
    },
    "kyc-automation": {
        title: "Automatización Extendida KYC",
        subtitle: "Crea monstruos organizacionales con dos personas",
        heroDesc: "Manejaras una inmensa cascada diaria de nuevos aplicantes con un solo gestor manual; la IA enrutará y validará 94% de tus flujos al instante sin que pagues horas extra ni domingos laborales.",
        visualType: "document",
        features: [
            { icon: "⚡", title: "Aprobaciones Fantasma", desc: "Nadie tendrá que ver las caras de aprobación seguras, pasarán directo de on-boarding a consumo sin pestañear el gestor corporativo." },
            { icon: "📐", title: "Fórmulas NoCode", desc: "El director Compliance arrastrará flechas y bloques para que un chileno le pidan licencia de Conducir y al Colombiano la Tarjeta Ciudadana." },
            { icon: "🤖", title: "Extractor Quirúrgico OCR", desc: "Aunque el cartón esté cortado, doblado con una esquinita tapada nuestra red de Inteligencia Artificial sacará la placa base de cédula o MRZ sin problema en base a su base tridimensional." },
            { icon: "🌍", title: "Inteligencia Territorial", desc: "Cambiarán la interface visual, y las tipografías necesarias y pedirá los requisitos automáticamente si es chino; y se adaptará con inglés general si nota una dirección IP desde América general sin fricción para las ventas o conversión natural." }
        ]
    }
};

export const solutionsData = {
    en: en,
    es: es,
    // Fallbacks for un-translated versions
    fr: en,
    pt: en
};
