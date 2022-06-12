import AddNews from "../../components/Dashboard/AddNews"

const Dashboard = ({text, type}:{text:string, type:string}) => {
  return (
      <div>
          <AddNews/>
      </div>
  )
}

export default Dashboard