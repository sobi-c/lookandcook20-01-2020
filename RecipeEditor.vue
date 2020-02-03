<template>
  <div class="recipe-editor">
    <div class="editor-basic" v-if="( step == 1 )">
      <recipe-basic :recipe="recipe" :dataWatch="dataWatch" @stepTrigger="stepTrigger"></recipe-basic>
    </div>
    <div class="editor-steps" v-if="( step == 2 )">
      <recipe-step :recipe="recipe"></recipe-step>
    </div>
    <div class="editor-steps" v-if="( step == 3 )">
      <recipe-category :recipe="recipe"></recipe-category>
    </div>
  </div>
</template>
<script>
import RecipeBasic from '~/components/admin/recipe/editor/RecipeBasic.vue'
import RecipeStep from '~/components/admin/recipe/editor/RecipeStep.vue'
import RecipeCategory from '~/components/admin/recipe/editor/RecipeCategory.vue'
export default {
  props: ['step', 'recipe', 'dataWatch'],
  components: {
    RecipeBasic,
    RecipeStep,
    RecipeCategory
  },
  methods: {
    stepTrigger (step) {
      this.$emit('stepTrigger', step)
    }
  }
}
</script>