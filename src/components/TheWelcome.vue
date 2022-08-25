<script>
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
import { useFormulaStore } from "../stores/formulas";
import { ref } from "vue";
import { storeToRefs } from "pinia";
import Carousel from "./Carousel.vue";
import CarouselSlide from "./CarouselSlide.vue";

export default {
  components: {
    Carousel,
    CarouselSlide,
    WelcomeItem,
    DocumentationIcon,
    ToolingIcon,
    EcosystemIcon,
    CommunityIcon,
    SupportIcon,
  },
  setup() {
    const store = useFormulaStore();
    const { topics, loading } = storeToRefs(store);
    const visibleSlide = ref(0);

    return {
      store,
      topics,
      loading,
      visibleSlide,
    };
  },
  computed: {
    topicsLength(){
      return this.topics.length - 1 ;
    }
  },  
  methods: {
    next() {
      if(this.visibleSlide.value >= this.topicsLength) {
        this.visibleSlide = 0;
      }
      else{
        this.visibleSlide++;
      }
    },
    prev() {
      if(this.visibleSlide.value <= 0) {
        this.visibleSlide = this.topicsLength;
      }else{
        this.visibleSlide --;
      }
    }
  },
};
</script>

<template>
  <Carousel @next="next" @prev="prev">
    <CarouselSlide
      v-for="(topic, index) in topics"
      :key="topic.id"
      :index="index"
      :visibleSlide="visibleSlide"
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
        <ol style="padding: 0;">
          <li
            style="margin-top: 1.2rem; width: 50%;"
            v-for="(formula, index) in topic.formulas"
            :key="index"
            :index="index"
          >
            <vue-mathjax :formula="formula"></vue-mathjax>
          </li>
        </ol>
      </WelcomeItem>
    </CarouselSlide>
  </Carousel>
</template>
