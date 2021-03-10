<template>
<div class="wrapper">
<div id="app">
<div class="content-wrapper">
    <section>
        <div class="container">
            <form action="">
              <label for="nameField">Имя животного</label>
              <input id="nameField" type="text" placeholder="CJ Patoilo">
              <label for="nameField">Вид</label>
              <input id="nameField" type="text" placeholder="CJ Patoilo">
              <label for="ageRangeField">Возраст</label>
              <input id="nameField" type="text" placeholder="CJ Patoilo">
              <label for="ageRangeField">Причина посещения</label>
              <input id="nameField" type="text" placeholder="CJ Patoilo">
              <label for="commentField">Лечение</label>
              <textarea id="commentField" placeholder="Hi CJ …"></textarea>
              <div class="col-xs-6 grid-end">
                <a class="button--round button--big button button-primary" type="submit">Добавить</a>
                </div>
</form>
</div>
    </section>
</div>
</div>
</div>
</template>

<script>
export default {
  data(){
     return {
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>