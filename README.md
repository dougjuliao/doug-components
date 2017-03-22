# doug-components

> Ideias de components

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

### Components e funionalidades criadas
- Menu-recursivo-vertical.
- Rotas - em andamento... funcionando apenas no primeiro nivel do menu.
- Form - Input.
- Form - button.
- Menu horizontal (vue router).
  -- Ainda não descobri um jeito de Utilizar o children do vue-router.
- Table com request get (vue resource)...
- Grid css com até 6 colunas. Ex.:
  ```html
    <section>
        <div class="grid exemplo-grid g-1"><p>1</p></div>
    </section>
    <section>
        <div class="grid exemplo-grid g-2"><p>2</p></div>
        <div class="grid exemplo-grid g-2"><p>2</p></div>
    </section>
    <section>
        <div class="grid exemplo-grid g-3"><p>3</p></div>
        <div class="grid exemplo-grid g-3"><p>3</p></div>
        <div class="grid exemplo-grid g-3"><p>3</p></div>
    </section>
    <section>
        <div class="grid exemplo-grid g-4"><p>4</p></div>
        <div class="grid exemplo-grid g-4"><p>4</p></div>
        <div class="grid exemplo-grid g-4"><p>4</p></div>
        <div class="grid exemplo-grid g-4"><p>4</p></div>
    </section>
    <section>
        <div class="grid exemplo-grid g-5"><p>5</p></div>
        <div class="grid exemplo-grid g-5"><p>5</p></div>
        <div class="grid exemplo-grid g-5"><p>5</p></div>
        <div class="grid exemplo-grid g-5"><p>5</p></div>
        <div class="grid exemplo-grid g-5"><p>5</p></div>
    </section>
    <section>
        <div class="grid exemplo-grid g-6"><p>6</p></div>
        <div class="grid exemplo-grid g-6"><p>6</p></div>
        <div class="grid exemplo-grid g-6"><p>6</p></div>
        <div class="grid exemplo-grid g-6"><p>6</p></div>
        <div class="grid exemplo-grid g-6"><p>6</p></div>
        <div class="grid exemplo-grid g-6"><p>6</p></div>
    </section>
  ```

