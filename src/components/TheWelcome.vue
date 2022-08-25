<script>
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";

//store and vue
import { useFormulaStore } from "../stores/formulas";
import { storeToRefs } from "pinia";

export default {
  components: {
    WelcomeItem,
    DocumentationIcon,
    ToolingIcon,
    EcosystemIcon,
    CommunityIcon,
    SupportIcon,
  },
  setup() {
    const store = useFormulaStore();
    const { topics } = storeToRefs(store);

    return {
      store,
      topics,
    };
  },
};
</script>

<template>
  <div>
      <div
        v-for="topic in topics"
        :key="topic.id"
        style="
          border: 0.5px solid gray;
          border-radius: 20px;
          margin: 15px auto;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
            rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
          padding: 1rem 2rem;
        "
      >
        <WelcomeItem>
          <template #icon>
            <SupportIcon />
          </template>
          <template #heading>Tema:</template>
          {{ topic.name }}
        </WelcomeItem>

        <WelcomeItem>
          <template #icon>
            <DocumentationIcon />
          </template>
          <template #heading>Descripcion:</template>
          {{ topic.description }}
        </WelcomeItem>

        <WelcomeItem>
          <template #icon>
            <EcosystemIcon />
          </template>
          <template #heading>Ecuaciones</template>
          <ol style="padding: 0">
            <li
              style="margin-top: 1.2rem; width: 50%"
              v-for="(formula, index) in topic.formulas"
              :key="index"
              :index="index"
            >
              <vue-mathjax :formula="formula"></vue-mathjax>
            </li>
          </ol>
        </WelcomeItem>
      </div>
  </div>
</template>
