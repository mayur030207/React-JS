import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user="Mahesh Vispute" img="https://cdn.prod.website-files.com/5ec7dad2e6f6295a9e2a23dd/66fcde00cf54d71747a52bac_upwork-profile-photo-tips.jpg"/>
      <Card user="Mayur Gadhari" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV6UdR7RNtNQnZ1LhJMNJ5ODL8RcgggmFWRw&s"/>
    </div>
  )
}

export default App
