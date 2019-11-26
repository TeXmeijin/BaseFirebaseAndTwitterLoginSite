<template>
  <main>
    <section class="heading">
      <h1 class="heading-catch">
        <span class="lg">
          縁メモ
          <span class="foot">-enmemo-</span>
        </span>
        <span class="md">
          あなたの”縁”を、
          <br>忘れないように。
        </span>
      </h1>
    </section>
    <section class="inquire">
      <h2 class="inquire-message">
        このTwitterアカウント、どこで出会った誰だっけ？
      </h2>
      <span class="inquire-statement">SNSで繋がって数ヶ月。久々に見かけたそのアカウントのこと、あなたは覚えていますか？</span>
    </section>
    <aside class="footer">
      <a v-if="isLogined" class="footer-twitterLogin" href="/post">縁をメモする</a>
      <button v-else class="footer-twitterLogin" @click="login()">
        <span>Twitterでログイン</span>
      </button>
    </aside>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { namespace, Action } from 'vuex-class'

import * as auth from '~/store/auth'
const Auth = namespace(auth.name)

@Component
export default class Index extends Vue {
  @Auth.Action login;
  @Auth.Action logout;

  @Auth.State user;
  @Auth.State uid;
  @Auth.State credential;

  public get isLogined (): boolean {
    return !!this.user && !!this.uid && !!this.credential
  }
}
</script>

<style scoped lang="scss">
.heading {
  &-catch {
    background-image: url(~assets/img/heading/people-circle.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 40px 24px;

    .lg {
      color: $white;
      font-weight: bold;
      font-size: 2.8rem;

      .foot {
        font-size: 1.4rem;
      }
    }

    .md {
      color: $white;
      font-weight: bold;
      font-size: 1.8rem;
    }
  }
}

.inquire {
  padding: 40px 24px;

  &-message {
    font-weight: bold;
    font-size: 1.8rem;
  }

  &-statement {
    font-size: 1.2rem;
  }
}

.footer {
  padding: 8px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  background: #33333333;
  width: 100%;

  &-twitterLogin {
    width: 100%;
    border-radius: 30px;
    height: 60px;
    box-sizing: border-box;
    padding: 8px 16px;
    color: $white;
    background: #58a8e9;
    font-size: 1.4rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
