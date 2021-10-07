<template>
  <div id="app">
    <ShipmentForm />
  </div>
</template>

<script>
import ShipmentForm from "../components/ShipmentForm";
export default {
  components: { ShipmentForm },
};
</script>

<!--
 <template>
  <form @submit.prevent="formSubmit">
    <SchemaForm schemaRowClasses ="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5" :schema="schema" />

    <BaseButton type="submit">Submit</BaseButton>

    <pre>{{ userData }}</pre>
  </form>
</template>

<script>
import { computed, ref } from "vue";
import FormText from "../components/FormText.vue";
import BaseButton from "../components/BaseButton.vue";
import { SchemaForm, useSchemaForm } from "formvuelate";

const SCHEMA = [
  [
    {
      component: FormText,
      label: "First Name",
      model: "firstName",
      style: "margin-right: 10px",
    },
    {
      component: FormText,
      label: "Last Name",
      model: "lastName",
    },
  ],
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
    useSchemaForm(userData);

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

    return {
      userData,
      schema,
      formSubmit,
    };
  },
};
</script>

-->

<!--
<template>
<ShipmentForm />
</template>
<script>
import ShipmentForm from "../components/ShipmentForm.vue"

export default {
    components: { ShipmentForm },
    setup() {
        return { ShipmentForm }
    }
}
</script>

-->
