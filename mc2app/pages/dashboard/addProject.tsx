
import AddProject from "components/Dashboard/AddProject"
import AddNews from "../../components/Dashboard/AddNews"

const Dashboard = ({text, type}:{text:string, type:string}) => {
  return (
      <div>
          <AddProject/>
      </div>
  )
}

export default Dashboard