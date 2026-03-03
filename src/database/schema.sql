-- Script para crear el esquema 'verifid'
CREATE SCHEMA IF NOT EXISTS verifid;

-- Tabla para almacenar las solicitudes del formulario de contacto
CREATE TABLE IF NOT EXISTS verifid.contact_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    work_email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(50),
    company_name VARCHAR(150),
    country VARCHAR(100),
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
