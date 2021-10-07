<template>
  <div
    class="
      p-6
      max-w-lg
      mx-auto
      bg-white
      rounded-xl
      shadow-md
      flex
      items-center
      space-x-4
    "
  >
    <div>
      <div class="text-xl font-medium text-red">ChitChat</div>
      <p class="text-blue-500">You have a new message!</p>
    </div>
  </div>
  <Form
    @submit="onSubmit"
    :validation-schema="schema"
    class="space-y-8 divide-y divide-gray-200"
  >
    <div class="space-y-8 divide-y divide-gray-200">
      <div class="pt-8">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Create Order
        </h3>
        <p class="mt-1 text-sm text-gray-500">Add shipping info below</p>
        <fieldset>
          <legend class="block text-sm font-medium text-gray-700">
            Ship To:
          </legend>
          <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <TextInput
                name="shipToName"
                label="Name"
                type="text"
                success-message=""
              />
            </div>
            <div class="sm:col-span-3">
              <TextInput
                name="shipToComp"
                id="Company"
                label="Company"
                type="text"
                success-message=""
              />
            </div>
            <!--
            <div class="sm:col-span-3">
              <TextInput
                name="shipToAddress1"
                id="address1"
                label="Address 1"
                type="text"
                success-message=""
              />
            </div>
            <div class="sm:col-span-3">
              <TextInput
                name="shipToAddress2"
                id="address2"
                label="Address 2"
                type="text"
                success-message=""
              />
            </div>
            <div class="sm:col-span-3">
              <TextInput
                name="shipToCity"
                id="city"
                label="City"
                type="text"
                success-message=""
              />
            </div>

            <div class="sm:col-span-3">
              <TextInput
                name="shipToState"
                id="state"
                type="text"
                label="State"
                success-message=""
              />
            </div>
            <div class="sm:col-span-3">
              <div>
                <label
                      for="countries"
                      class="block text-sm font-medium text-gray-700"
                      >Countries</label>
                <select id="countries" name="countries" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                  <option>USA</option>
                  <option selected>Canada</option>
                  <option>EU</option>
                </select>
              </div>
               <TextInput
                name="shipToCountry"
                id="country"
                type="text"
                label="Country"
                success-message=""
              />
            </div>
            <div class="sm:col-span-3">
              <TextInput
                name="shipToPostal"
                id="postal"
                type="text"
                label="Postal Code"
                success-message=""
              />
            </div>
            <div class="sm:col-span-3">
              <TextInput
                name="shipToPhone"
                id="phone"
                type="tel"
                label="Phone"
                success-message=""
              />
            </div>
            <div class="sm:col-span-3">
              <TextInput
                name="shipToEmail"
                id="email"
                type="email"
                label="Email"
                success-message=""
              />
            </div> 
            -->
          </div>
        </fieldset>
        <div class="pt-5">
          <div class="flex justify-end">
            <button
              type="button"
              class="
                bg-white
                py-2
                px-4
                border border-gray-300
                rounded-md
                shadow-sm
                text-sm
                font-medium
                text-gray-700
                hover:bg-gray-50
                focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
              "
            >
              Cancel
            </button>
            <button
              type="submit"
              class="
                ml-3
                inline-flex
                justify-center
                py-2
                px-4
                border border-transparent
                shadow-sm
                text-sm
                font-medium
                rounded-md
                text-white
                bg-indigo-600
                hover:bg-indigo-700
                focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                submit-btn
              "
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </Form>
</template>

<script>
import { Form } from "vee-validate";
import * as Yup from "yup";
//import TextInputOld from "./TextInputOld.vue";
import TextInput from "../components/TextInput.vue";
import "yup-phone";
// import Multiselect from "@vueform/multiselect";
export default {
  name: "App",
  components: {
    TextInput,
    Form,
    // Multiselect,
  },
  props: {},
  setup() {
    function onSubmit(values) {
      alert(JSON.stringify(values, null, 2));
    }
    // placeholder="Your Name"
    // Using yup to generate a validation schema
    // https://vee-validate.logaretm.com/v4/guide/validation#validation-schemas-with-yup
    // const phoneSchema = Yup.string().phone("US").required();
    const schema = Yup.object().shape({
      shipToName: Yup.string().required(),
      shipToComp: Yup.string(),
      shipToddress1: Yup.string(),
      shipToddress2: Yup.string(),
      shipToCity: Yup.string(),
      shipToState: Yup.string(),
      shipToCountry: Yup.string(),
      shipToPostal: Yup.string(),
      shipToEmail: Yup.string().email().required(),
      shipToPhone: Yup.string().phone("US").required(),
      //Yup.string(),
      /* password: Yup.string().min(6).required(),
      confirm_password: Yup.string()
        .required()
        .oneOf([Yup.ref("password")], "Passwords do not match"), */
    });
    return {
      onSubmit,
      schema,
      value: null,
      options: ["US", "CAN", "UK"],
      TextInput,
      //  phoneSchema,
    };
  },
};
</script>
