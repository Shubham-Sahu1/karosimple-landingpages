import { FORMSPREE_ENDPOINT } from "./constants";

/**
 * Submits contact form details to Formspree
 * @param {Object} data 
 * @returns {Promise<boolean>}
 */
export async function submitToFormspree(data) {
  if (!FORMSPREE_ENDPOINT) {
    // Simulated delay during dev
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return true;
  }

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.ok;
  } catch (error) {
    console.error("Formspree submission error:", error);
    return false;
  }
}
