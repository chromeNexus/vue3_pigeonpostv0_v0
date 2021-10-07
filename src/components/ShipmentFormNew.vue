<template>
  <form @submit.prevent="formSubmit">
    <SchemaForm
      :schema="schema"
      :modelValue="userData"
      @update:modelValue="mergeChanges"
    />

    <BaseButton type="submit">Submit</BaseButton>

    <pre>{{ userData }}</pre>
  </form>
</template>

<script>
import { computed, ref } from "vue";
import FormText from "./FormText.vue";
import { SchemaForm } from "formvuelate";
import BaseButton from "@/components/BaseButton.vue";

const SCHEMA = [
  {
    component: FormText,
    label: "First Name",
    model: "firstName",
  },
  {
    component: FormText,
    label: "Last Name",
    model: "lastName",
  },
  {
    component: SchemaForm,
    model: "subform",
    schema: [
      {
        component: FormText,
        label: "Work address",
        model: "address",
      },
      {
        component: FormText,
        label: "Work phone",
        model: "phone",
      },
    ],
  },
];

export default {
  components: { BaseButton, SchemaForm },
  setup() {
    let userData = ref({});
    const schema = computed(() => {
      return userData.value.isVueFan
        ? {
            ...SCHEMA,
            feedback: {
              component: FormText,
              label: "Gimme some feedback",
            },
          }
        : SCHEMA;
    });

    const formSubmit = () => {
      alert("Form submitted!");
    };

    const mergeChanges = (changes) => {
      for (let key in changes) {
        userData.value[key] = changes[key];
      }
    };

    return {
      userData,
      schema,
      formSubmit,
      mergeChanges,
    };
  },
};
</script>
