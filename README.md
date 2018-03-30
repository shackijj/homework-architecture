В рамках данной работы мне хотелось сделать небольшой фреймворк для 
разработки приложений с использованием WebComponents.

Поддержка WebComponents между браузерами не является хорошей поэту используется данный полифил:
https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.1.1/webcomponents-lite.js
больше деталей можно найти [тут](https://www.webcomponents.org/polyfills)

Без полифила фрэймворк работает в Google Chrome и Safari.

Я специально не использовал сборку т.к. современные браузеры реализуют
html импорты и мне хотелось, в образовательных целяц, работать именно с ними.

Минусом отстуствия сборки является использование глобальных переменных APP_STORE и APP_ACTIONS.
Кажется, что в рамках небольшого приложения это не так опасно. (в продакшн среде конечено нужна сборка)

Демо доступно [тут](https://shackijj.github.io/homework-architecture/)

Фреймворк предоставляет три класса Store, WebComponent, ConnectedWebComponent.

Store - используется для создания единого для приложения хранилища данных и организации 
однонаправленного потока данных (Flux). Объединяет в себе Dispather и Store из классического Flux подхода.

WebComponent - используется для создания веб-компонетов (см. директорию components).
Энкапслуриюется логика по подключению shadowDom.

ConnectedWebComponent - используется для создания веб-компонетов использующих Store, как источник данных.

Файловая структура:
```
.
├── components (директория для компонетов)
│   ├── action-logger
│   │   ├── action-logger.css (view)
│   │   ├── action-logger.html (view)
│   │   └── action-logger.js (presenter)
│   ├── app-container
│   │   ├── app-container.html
│   │   └── app-container.js
│   └── view-stub
│       ├── view-stub.css
│       ├── view-stub.html
│       └── view-stub.js
├── index.html
├── index.js (инициализация приложения и работа с model)
├── lib (библиотека фреймворка)
│   └── WebComponentsFlux.js
├── package.json
├── package-lock.json
└── README.md
```
Почему мне кажется что здесь реализован MVP паттерн:
1. Работа с моделью энкапсулирована в Actions и Store.
2. Имеем пассивные View как html и Css
3. Имеем presenter который получает данные из модели и модифицирует View

Компонент app-container - используется для демонстрации того, что компоненты могут вложенными.
