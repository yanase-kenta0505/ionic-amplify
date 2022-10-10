<template>
  <authenticator>
    <template v-slot="{ signOut }">
      <ion-page>
        <ion-header :translucent="true">
          <ion-toolbar>
            <ion-title>Blank</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
          <ion-header collapse="condense">
            <ion-toolbar>
              <ion-title size="large">Blank</ion-title>
            </ion-toolbar>
          </ion-header>

          <div id="container">
            <ion-card>
              <ion-card-header>
                タスク追加
              </ion-card-header>
              <ion-card-content>
                <ion-item-group>
                  <ion-item>
                    <ion-input type="text" v-model="taskname"></ion-input>
                  </ion-item>
                  <ion-button @click="addTask">
                    追加
                  </ion-button>
                  <ion-button @click="echoStr">
                    呼び出し
                  </ion-button>
                  <ion-button @click="signOut">
                    サインアウト
                  </ion-button>
                </ion-item-group>
                <div style="width: 300px; height: auto; background-color: aquamarine; margin: auto;">
                  <ul>
                    <li v-for="(todo, index) in todos" :key="index">{{todo.name}}</li>
                  </ul>
                </div>
              </ion-card-content>
            </ion-card>
          </div>
        </ion-content>
      </ion-page>
    </template>
  </authenticator>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonCard, IonCardHeader, IonCardContent, IonItemGroup, IonButton } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { createTodo, add } from '../graphql/mutations'
import { echo } from '../graphql/queries'
import { onCreateTodo } from '@/graphql/subscriptions';
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
import { OnCreateTodoSubscription, Todo } from '../API'

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
    IonItem,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonItemGroup,
    IonButton,
    Authenticator
  },
  setup() {
    type OnCreateTodoSubscriptions = { value: { data: OnCreateTodoSubscription } }
    const taskname = ref('')
    const todos = ref<Todo[]>([])

    const addTask = async () => {
      const auth = await Auth.currentAuthenticatedUser()
      if (!taskname.value) return
      const username = auth.username
      const input = {
        "name": taskname.value,
        "owner": username as string
      }

      await API.graphql(graphqlOperation(createTodo, { input }))
      taskname.value = ''
    }

    const echoStr = async () => {
      const name = await API.graphql(graphqlOperation(echo, { msg: { "msg": taskname.value } }))
      console.log(name)
    }


    (async () => {
      const auth = await Auth.currentAuthenticatedUser()
      try {
        const subscription = await API.graphql(graphqlOperation(onCreateTodo, { owner: auth.username }))
        if ("subscribe" in subscription) {
          subscription.subscribe({
            next: ({ value: { data } }: OnCreateTodoSubscriptions) => {
              if (data.onCreateTodo) {
                const todo: Todo = data.onCreateTodo
                todos.value.push(todo)
                console.log(todo)
              }
            }
          })
        }
      } catch (error) {
        console.log(error)
      }

    })()



    return {
      taskname,
      addTask,
      todos,
      echoStr,
    }
  }
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}

ion-item {
  width: 300px;
}

ion-item-group {
  display: flex;
  justify-content: center;
}

ion-button {
  align-self: flex-end;
  margin-left: 20px;
}
</style>
