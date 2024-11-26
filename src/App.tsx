import { useState } from 'react'
import './App.css'
interface dictionaryData {
  date: string,
  views: number,
  article: string
}
function App() {
  const [data, setData] = useState<dictionaryData[]>([

    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

  ])

  const handleSortByDate = () => {
    const filteredData = [...data].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    setData(filteredData);

  }
  const handleSortByViews = () => {
    const result = [...data].sort((a, b) => b.views - a.views);
    setData(result)
  }
  return (
    <>
      <h1>Date & Views Table</h1>
      <button onClick={() => handleSortByDate()}>Sort by Date</button>
      <button onClick={() => handleSortByViews()}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>

          {data?.map((ele, index) => {
            return (
              <tr key={index}>
                <td>{ele.date}</td>
                <td>{ele.views}</td>
                <td>{ele.article}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default App
