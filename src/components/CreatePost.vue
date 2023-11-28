<template>
    <div class="form-container">
        <h2>Crea un nuovo post</h2>

        <form @submit.prevent="createPost">
            <div class="form-group">
                <label class="label" for="title">Titolo:</label>
                <input class="input" type="text" id="title" v-model="postData.title" required />
            </div>

            <div class="form-group">
                <label class="label" for="content">Contenuto:</label>
                <textarea class="input" id="content" v-model="postData.content" required></textarea>
            </div>

            <button class="button" type="submit" :disabled="isCreatingPost">Crea Post</button>
        </form>

        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
        <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            postData: {
                title: "",
                content: "",
            },
            isCreatingPost: false,
            errorMessage: "",
            successMessage: "",
        };
    },
    methods: {
        async createPost() {
            this.isCreatingPost = true;
            this.errorMessage = "";
            this.successMessage = "";

            try {
                const response = await axios.post("http://localhost:3002/posts", this.postData).catch(error => {
                    console.error('Errore nella richiesta HTTP:', error);
                    throw error;  
                });

                if (response && response.data) {
                    const post = response.data[0]; 
                    if (post) {
                        console.log('Post creato con successo:', post);
                        this.successMessage = 'Post creato con successo!';
                        this.postData = { title: '', content: '' };
                    } else {
                        console.error('Errore durante la creazione del post: Post non trovato nella risposta');
                        this.errorMessage = 'Errore durante la creazione del post: Post non valido';
                    }
                } else {
                    console.error('Errore durante la creazione del post: Risposta non valida');
                    this.errorMessage = 'Errore durante la creazione del post: Risposta non valida';
                }
            } catch (error) {
                if (error.response && error.response.data) {
                    this.errorMessage = error.response.data.message || "Errore durante la creazione del post.";
                } else {
                    this.errorMessage = "Errore durante la creazione del post.";
                }
            } finally {
                this.isCreatingPost = false;
            }
        }
    },
};
</script>

<style scoped>
.form-container {
    max-width: 600px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 20px;
}

.label {
    display: block;
    font-size: 16px;
    margin-bottom: 8px;
}

.input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 15px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.button:hover {
    background-color: #0056b3;
}

.error-message {
    color: red;
    font-size: 14px;
    margin-top: 5px;
}

.success-message {
    color: green;
    font-size: 14px;
    margin-top: 5px;
}
</style>
