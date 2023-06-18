const usePageClip = () => {

   const sendData = async (data:string) => {
    try {
      const url = 'https://formspree.io/f/moqzgkdv';
      const headers = {
        'Content-Type': 'application/json',
      };
  
      const body = JSON.stringify({ contact: data });
  
      await fetch(url, {
        method: 'POST',
        headers,
        body,
      });
  
      console.log('¡Datos enviados exitosamente a Formspree!');
    } catch (error) {
      console.error('Error al enviar los datos a Formspree:', error);
    }
   }

   return {
      sendData
    }
}

export default usePageClip