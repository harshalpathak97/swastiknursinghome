import { useContext } from "react";
import { AppContext } from '../context/AppContext'

const Myappointment = () => {

  const { doctors } = useContext(AppContext)

  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b ">My appointments</p>
      <div>
        {/* Placeholder for real appointments */}
        <div className="text-center py-10 text-gray-500">
          <p>No appointments scheduled yet.</p>
        </div>
      </div>
    </div>
  );
};

export default Myappointment;
