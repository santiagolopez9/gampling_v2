# Glamping el Refugio · La Calera

Sitio web interactivo y sistema de reservas directas para **Glamping el Refugio**, ubicado en la Vereda San José, La Calera, Cundinamarca (a 45 min de Bogotá).

Diseñado con una estética natural, acogedora y minimalista en tonos tierra, optimizado para conversión directa vía WhatsApp y experiencia visual inmersiva.

---

## 🌟 Características Principales

- **Explorador Interactivo de la Vista Panorámica**: Explora la vista al Valle de Sopó en distintos momentos del día (Amanecer campesino, Tarde en malla catamarán, Atardecer dorado, Granja agroecológica) con modal de alta resolución.
- **Catálogo de Domos de Madera y Cabañas**:
  - *Glamping 1A El Refugio (Domo Insignia)*: Cama King, malla catamarán suspendida, terraza privada, cafetera de origen, equipo de sonido, agua caliente, Wi-Fi.
  - *Domo Cedro Deluxe*: Tina de hidromasaje en madera con vista al valle, chimenea interior, malla catamarán.
  - *Cabaña Campestre San José*: Para familias o grupos de hasta 5 personas con chimenea de piedra natural.
- **Motor de Reserva Directa**:
  - Selector interactivo de fechas (Check-in / Check-out) con cálculo automático de noches.
  - Configuración de huéspedes y mascotas (100% Pet Friendly).
  - Adicionales: Decoración romántica, cena gourmet en terraza, transporte privado desde Bogotá, kit de fogata nocturna.
  - Conversor de moneda en tiempo real (COP / USD).
  - Generación de código de reserva oficial (ej. `REF-8492`).
  - Enlace directo a WhatsApp (+57 320 3338606) con mensaje preformateado.
  - Voucher digital descargable con integración a Google Calendar y exportación de archivo `.ics`.
- **Ruta y Cómo Llegar**:
  - Indicaciones desde Bogotá por Patios (45 min) y La Calera (20 min).
  - Enlaces directos a Google Maps y Waze.
  - Botón de asistencia en ruta por WhatsApp.
- **Reseñas Verificadas de Google**:
  - Calificación 5.0 basada en las 74 opiniones reales de Google.
  - Filtros por tipo de viaje (parejas, mascotas, naturaleza).
  - Enlaces para escribir opiniones o subir fotos a Google Maps.

---

## 🚀 Cómo Subir a GitHub y Desplegar en Vercel

### 1. Subir a GitHub
En tu terminal local:
```bash
git init
git add .
git commit -m "Initial commit: Glamping el Refugio La Calera"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/glamping-el-refugio.git
git push -u origin main
```

### 2. Desplegar en Vercel
1. Ingresa a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
2. Haz clic en **"Add New Project"** e importa tu repositorio `glamping-el-refugio`.
3. Vercel detectará automáticamente la configuración de **Vite**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Haz clic en **"Deploy"**. ¡Listo! Tu sitio estará activo con SSL y CDN global en menos de 1 minuto.

---

## 🛠️ Tecnologías Utilizadas

- **React 19** + **TypeScript**
- **Vite 8**
- **Tailwind CSS 4**
- **Lucide Icons**
- **Vercel SPA Configuration** (`vercel.json`)
