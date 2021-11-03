import { useEffect, useState } from 'react'
import { Button, Card, Page, Title } from './components'
import API from './global/api-endpoint'

const App = () => {

  const [listData, setListData] = useState([])

  const getData = async () => {
    const response = await fetch(API)
      .then(res => res.json())
      .then(data => setListData(data.results))
      .catch(err => console.log(err))
    return response
  };

  useEffect(() => {
    getData();
  }, [])

  return (
    <Page>
      <section style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap'
      }}>
        {listData && (
          <div>
            <Title name="FindFriend App" />
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              gap: 15,
              flexWrap: 'wrap'
            }}>
              {listData.map((item, i) => (
                <Card key={i} data={item} />
              ))}
            </div>
          </div>
        )}
        <Button name="Find" handleUpdate={getData} />
      </section>
    </Page>
  )
}

export default App;
