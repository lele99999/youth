import home from './components/home'
import HelloWorld from './components/HelloWorld'
import login from './components/login'
import competition from './components/competition'
import compstudent from './components/compstudent'


export default[
    {
      path:'/add',
     component:HelloWorld       
    },
    {
      path:'/login',
     component:login
    },
    {
      path:'/comp',
     component:competition
    },
    {
      path:'/coms',
     component:compstudent
    },
    {
      path:'/home',
     component:home
    },
]
