import { useEffect } from "react";
import axios from "axios";

const SuitsAPI = () => {
  useEffect(() => {
    // Fetch the JSON data using axios
    axios
      .get(
        "https://script.googleusercontent.com/macros/echo?user_content_key=18KvA1xQcyTasJkgs2qZnO6_B2UAE50xO6twG59ZmJ6fcN7ychHe5sxvuG7Jbpwqn0ul3Nmd1hEjuBRr8ltzqt-l0XKhfaPMm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnL-kjbtKDMaqxYfgxLCSgoRYH728tlhmQ_HqTJiKDV7qjnt2lerJtiFS6neFqDBqnQ9S2zgffZzsC-HKzBiJSzErOkvaykzkaQ&lib=MRfdGYedRKrKJlHxMAGyzfkRFxkos_pL4"
      )
      .then((response) => {
        // Log the fetched data to the console
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data:", error);
      });
  }, []); // Empty array means this runs once after the component mounts

  // Nothing is returned since you want it only for console logs
  return null;
};

export default SuitsAPI;
