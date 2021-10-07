<template>
  <!-- :class="{ 'has-error': !!errorMessage, success: meta.valid }" -->
  <div class="TextInput">
    <label :for="name" class="block text-sm font-medium text-gray-700">{{
      label
    }}</label>
    <div class="mt-1">
      <input
        v-bind="$attrs"
        :name="name"
        :id="id"
        :value="inputValue"
        :placeholder="label"
        @input="handleChange"
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
        @blur="handleBlur"
      />
      <!--
        @input="$emit('update:modelValue', $event.target.value)"
        :value="modelValue"
        :id="uuid"
        :aria-describedby="error ? `${uuid}-error` : null"
        :aria-invalid="error ? true : null"
      -->
    </div>
    <!--  <p class="help-message" v-show="errorMessage || meta.valid">
      {{ errorMessage || successMessage }}
    </p> -->
    <p v-show="errorMessage">{{ id }} not valid</p>
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
    id: {
      type: String,
      required: true,
    },
    /* errorMessage: {
      type: String,
      default: "",
    }, */
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
      handleChange,
      handleBlur,
      errorMessage,
      inputValue,
      meta,
    };
  },
};
</script>
