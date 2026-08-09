# Fronzen548 Portfolio

Це темне кібepпанк портфоліо створене з використанням Next.js, TypeScript, Tailwind CSS, Framer Motion та React Three Fiber.

## Що всередині
- Сучасний landing page у стилі cyberpunk
- 4K-подібний 3D рендер планети в hero-блоці
- Блок технологій з іконками та стеком
- Фільтрувані картки проєктів
- Розділ «Про мене» з реальними даними
- Контактна форма з бекендом API
- Кнопка завантаження CV

## Розгортання локально
1. `npm install`
2. `npm run dev`
3. Відкрийте `http://localhost:3000`

## Продакшн
- `npm run build`
- `npm run start`

## Важливо
- Для реального відправлення повідомлень через контактну форму інтегруйте поштовий сервіс або webhook у `pages/api/contact.ts`
- Замініть посилання на проєкти у `components/Projects.tsx` на ваші власні репозиторії
- Завантажте свій реальний `Fronzen548_Resume.pdf` у папку `public` при необхідності
