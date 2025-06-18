<template>
  <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
    {{ error }}
  </base-dialog>

  <section>
    <base-card>
      <h2>Register as a coach now!</h2>

      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from "../../components/coaches/CoachForm.vue";

export default {
  //
  data() {
    return {
      error: null,
    };
  },
  //
  components: {
    "coach-form": CoachForm,
  },
  //
  methods: {
    async saveData(data) {
      try {
        await this.$store.dispatch("coaches/registerCoach", data);
        this.$router.replace("/coaches");
      } catch (error) {
        this.error = error.message || "Failed to register!";
      }
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>
