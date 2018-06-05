<template>
  <div>
    <h1>{{ $route.params.slug || 'Home' }}</h1>
    <pre>{{ userAgent }}</pre>
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li v-for="(slug, index) in slugs" :key="index">
        <nuxt-link :to="{ name: 'slug', params: { slug } }">{{ slug }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  /**
   * `asyncData`はコンポーネントに渡すデータを設定する前に非同期操作を処理できるメソッド
   * データをフェッチしてサーバー側でレンダリングすることができる
   * `asyncData`は、コンポーネントをロードする前に毎回呼び出される（ページコンポーネントのみ）
   * サーバー側から呼び出すことも、対応するルートに移動する前に呼び出すこともできる
   * このメソッドは、最初の引数として`context`オブジェクト（https://nuxtjs.org/api/context）を受け取る
   * これを使用して、いくつかのデータを取得し、コンポーネントデータを返すことができます`asyncData`の結果は`data`とマージされる
   * @param store {Vuex Store} Vuex Storeのインスタンス Vuex Storeが設定されている場合、利用できる
   * @param route {Vue Router Route} Vue Routerのrouteインスタンス
   * @param userAgent {} user-agent.js（middleware）で実行されたcontext.userAgentに格納された値
   */
  asyncData({ store, route, userAgent }) {
    return {
      userAgent,
      slugs: ['foo', 'bar', 'baz'],
    };
  },
};
</script>
