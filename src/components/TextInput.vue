<template>
  <div :class="{ 'has-error': !!errorMessage, success: meta.valid }">
    <label
      class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
      :for="name"
    >
      {{ label }}
    </label>
    <input
      class="
        max-w-lg
        block
        w-full
        shadow-sm
        focus:ring-indigo-500
        focus:border-indigo-500
        sm:max-w-xs
        sm:text-sm
        border-gray-300
        rounded-md
      "
      :name="name"
      :type="type"
      :value="inputValue"
      @input="handleChange"
      @blur="handleBlur"
    />

    <p class="help-message" v-show="errorMessage || meta.valid">
      {{ errorMessage || successMessage }}
    </p>
  </div>
</template>

<script>
import { useField } from "vee-validate";

export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    successMessage: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    // we don't provide any rules here because we are using form-level validation
    // https://vee-validate.logaretm.com/v4/guide/validation#form-level-validation
    const {
      value: inputValue,
      errorMessage,
      handleBlur,
      handleChange,
      meta,
    } = useField(props.name, undefined, {
      initialValue: props.value,
    });

    return {
      inputValue,
      errorMessage,
      handleBlur,
      handleChange,
      meta,
    };
  },
};
</script>
