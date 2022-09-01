Vue.createApp (
    {
      data() {
        return {
            inputData: '',
            goals: []
        }
      },
      
      methods: {
        addgoal() {
            this.goals.push(this.inputData);
            this.inputData='';
        }
      }
    }
).mount('.app');