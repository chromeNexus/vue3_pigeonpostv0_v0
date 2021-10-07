<template>
  <div class="sm:col-span-3">
    <label
      :for="uuid"
      v-html="labelHtml"
      class="block text-sm font-medium text-gray-700"
    />
  </div>
  <div class="mt-1">
    <input
      class="
        shadow-sm
        focus:ring-indigo-500
        focus:border-indigo-500
        block
        w-full
        sm:text-sm
        border-gray-300
        rounded-md
      "
      :type="type"
      :value="modelValue"
      :required="required"
      :id="uuid"
      :disabled="readOnly"
      @input="update($event.target.value)"
    />
    <p v-show="validation.errorMessage" v-text="validation.errorMessage"></p>
  </div>
</template>

<script>
export default {
  // https://www.npmjs.com/package/v-form-builder
  // https://www.npmjs.com/search?q=vue%20dynamic%20form&page=2&perPage=20
  // https://levelup.gitconnected.com/add-dynamic-forms-to-your-vue-app-609de4005a2b
  // https://formvuelate.js.org/examples/#conditional-computed-schemas
  // https://morioh.com/p/212f6d8e7265
  // https://masteringjs.io/tutorials/vue/reactivity
  props: {
    modelValue: { required: true },
    required: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      required: true,
    },
    config: {
      type: Object,
      default: () => ({ type: "text" }),
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    uuid: {
      type: Number,
      default: 0,
    },
    validation: {
      type: Object,
      default: () => ({}),
    },
    type: {
      type: String,
      default: "text",
    },
    validations: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    labelHtml() {
      const requiredHtml =
        this.validations._exclusive && this.validations._exclusive.required
          ? ' <span class="label--required">*</span>'
          : "";
      return this.label + requiredHtml;
    },
  },
  methods: {
    update(value) {
      this.$emit("update:modelValue", value);
    },
  },
};
</script>
