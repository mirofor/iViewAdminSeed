// const debug = process.env.NODE_ENV !== 'production'
const admin = {
    state: {
        /**
         * 用户信息
         */
        user: {
            name: '',
            email: '',
            mobile: '',
            avatar: '../../../images/portrait.png',
            permissions: []
            // can: function (permission) {
            //   return this.permissions.findIndex(item => item === permission) > -1
            // }
        },
        /**
         * 分类下拉列表
         */
        categories: [],
        /**
         * 导航列表
         */
        navigationList: []
    },
    actions: {
        fetchCategories ({commit, state}) {
            if (state.categories.length < 1) {
                // selectApi.getCategories(response => {
                //   commit('setCategories', response)
                // })
            }
        },
        fetchNavigationList ({commit, state}) {
            if (state.navigationList.length < 1) {
                // selectApi.getNavigations(response => {
                //   commit('setNavigationList', response)
                // })
            }
        }
    },
    mutations: {
        /**
         * 设置当前用户
         * @param state
         * @param user
         */
        setUser (state, user) {
            state.user.id = user.id;
            state.user.name = user.name;
            state.user.email = user.email;
            state.user.mobile = user.mobile;
            state.user.permissions = user.permissions;
        },

        setCategories (state, categories) {
            state.categories = categories;
        },
        setNavigationList (state, navigationList) {
            state.navigationList = navigationList;
        }
    }
};

export default admin;