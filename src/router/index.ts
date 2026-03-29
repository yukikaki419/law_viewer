import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';


const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@/Pages/LawList.vue')
	},
	{
		// :lawId が変数部分になります
		path: '/laws/:lawId',
		name: 'LawContent',
		component: () => import('@/Pages/LawContent.vue'),
		props: true // URLパラメータをpropsとしてコンポーネントに渡す設定
	}
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
	scrollBehavior(to, _, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		}
		if (to.hash) {
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve({
						el: to.hash,
						top: 100,
						behavior: "instant"
					});
				}, 10); // 描画にかかる時間に合わせて調整
			});
		}
		return { top: 100 };
	}
});

export default router;