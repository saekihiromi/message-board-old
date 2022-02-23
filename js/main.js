Vue.createApp({
    data(){
        return{
            name:'',
            message:'',
            posts: []
        }
    },
    methods:{
        onSubmit(){
            // 名前が空の時に名無しをセットする
            if(this.name === ''){
                this.name = '名無し'
            }
            // 入力された名前とメッセージをpostオブジェクトとして生成
            let post = {
                name: this.name,
                message: this.message
            }
            // postsリストにpostsオブジェクトを格納
            this.posts.push(post)
            // データを格納した後に初期化
            this.name = '名無し'
            this.message= ''
        }
    },
    computed:{
        // 算出プロパティオプション：20以上を検出
        checkMessage(){
            return this.message.length > 20 
        },
        // メッセージがからかチェック
        checkNull(){
            return this.message === ''
        }
    }


}).mount('#app')