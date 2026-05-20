import { useState, useContext, useEffect } from "react";
import { assets } from '../assets/assets'
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { userData, updateUserProfile } = useContext(AuthContext);

  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    gender: 'male',
    dob: ''
  });
  const [loading, setLoading] = useState(false);

  // Initialize form data when userData matches
  useEffect(() => {
    if (userData) {
      setFormData({
        name: userData.name || '',
        phone: userData.phone || '',
        address: userData.address || '',
        gender: userData.gender || 'male',
        dob: userData.dob || ''
      });
    }
  }, [userData]);

  const handleSave = async () => {
    setLoading(true);
    try {
      await updateUserProfile({
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        gender: formData.gender,
        dob: formData.dob
      });
      setIsEdit(false);
      alert("Profile updated successfully!");
    } catch (error) {
      alert("Failed to update profile: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!userData) {
    return <div className="p-10 text-center">Loading profile...</div>;
  }

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm mx-auto p-4 sm:p-0">

      <div className="flex flex-col items-center sm:items-start">
        <img className="w-36 rounded mb-4" src={userData.image || assets.profile_pic} alt="" />

        {
          isEdit
            ? <input
              className="bg-gray-50 text-2xl sm:text-3xl font-medium max-w-60 mt-4 p-2 border rounded"
              type="text"
              value={formData.name}
              onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
            />
            : <p className="font-medium text-2xl sm:text-3xl text-neutral-800 mt-4">{userData.name}</p>
        }
      </div>

      <hr className="bg-zinc-400 h-[1px] border-none my-4" />

      <div>
        <p className="text-neutral-500 underline mt-3 uppercase tracking-wide">Contact Information</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-4 mt-4 text-neutral-700 items-center">
          <p className="font-medium">Email id:</p>
          <p className="text-blue-500">{userData.email}</p>

          <p className="font-medium">Phone:</p>
          {
            isEdit
              ? <input
                className="bg-gray-100 max-w-52 p-1 border rounded"
                type="text"
                value={formData.phone}
                onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              />
              : <p className="text-blue-400">{formData.phone || "Add phone number"}</p>
          }

          <p className="font-medium">Address:</p>
          {
            isEdit
              ? <textarea
                className="bg-gray-50 p-2 w-full border rounded resize-none"
                rows={2}
                value={formData.address}
                onChange={e => setFormData(prev => ({ ...prev, address: e.target.value }))}
              />
              : <p className="text-gray-500">{formData.address || "Add address"}</p>
          }
        </div>
      </div>

      <div>
        <p className="text-neutral-500 underline mt-6 uppercase tracking-wide">Basic Information</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-4 mt-4 text-neutral-700 items-center">
          <p className="font-medium">Gender:</p>
          {
            isEdit
              ? <select
                className="max-w-32 bg-gray-100 p-1 border rounded"
                onChange={(e) => setFormData(prev => ({ ...prev, gender: e.target.value }))}
                value={formData.gender}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              : <p className="text-gray-400 capitalize">{formData.gender}</p>
          }

          <p className="font-medium">Birthday:</p>
          {
            isEdit
              ? <input
                className="max-w-36 bg-gray-100 p-1 border rounded"
                type="date"
                onChange={(e) => setFormData(prev => ({ ...prev, dob: e.target.value }))}
                value={formData.dob}
              />
              : <p className="text-gray-400">{formData.dob || "Add birthday"}</p>
          }
        </div>
      </div>

      <div className="mt-10 flex justify-center sm:justify-start">
        {
          isEdit
            ? <button
              className="bg-primary text-white border border-primary px-8 py-2 rounded-full hover:bg-opacity-90 transition-colors duration-200 disabled:opacity-50"
              onClick={handleSave}
              disabled={loading}
            >
              {loading ? "Saving..." : "Save Information"}
            </button>
            : <button
              className="border border-primary text-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-200"
              onClick={() => setIsEdit(true)}
            >
              Edit
            </button>
        }
      </div>
    </div>
  );
};

export default Profile;
