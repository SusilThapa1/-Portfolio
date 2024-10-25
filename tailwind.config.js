/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'project1': "url('images/project-1.jpg')",
        'project2': "url('images/project-2.jpg')",
        'project3': "url('images/project-3.jpg')",
        'project4': "url('images/project-4.jpg')",
        'project5': "url('images/project-5.jpg')",
        'project6': "url('images/project-6.jpg')",
        'available':"url('images/available.jpg')",
         
      },
      colors:{
        color1:'#FFBD39',
        color2:'#999999',
        color3:'#FFFFFF1A',
      },
      fontFamily:{
        poppins:['Poppins']
      },
      keyframes:{
        progress:{
          '0%':{width: '0'},
          '100%':{width:'100%'}
        },
        rotate:{
          'to':{transform:'rotate'
          }
        }
      },
      animation:{
        'progress':'progress 3s  ease-in-out infinite ' 

      }
    },
  },
  plugins:  [],
}


