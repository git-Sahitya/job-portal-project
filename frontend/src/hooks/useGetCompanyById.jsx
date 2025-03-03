import { setSingleCompany } from "@/redux/companySlice";
import { COMPANY_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useGetCompanyById = (companyId) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSingleCompany = async () => {
      try {
        const res = await axios.get(
          `${COMPANY_API_ENDPOINT}/get/${companyId}`,
          {
            withCredentials: true,
          }
        );
        dispatch(setSingleCompany(res.data.company));
       
      } catch (error) {
        console.error("Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };
    if (companyId) {
      fetchSingleCompany();
    }

    fetchSingleCompany();
  }, [companyId, dispatch]);

  return { loading, error };
};

export default useGetCompanyById;
