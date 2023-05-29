const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  const api = await fetch(`https://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`);
  const data = await api.json();
  if (data.error) window.alert('Insira uma Cidade!');
  if (data.length === 0) window.alert('Nenhuma cidade encontrada');
  return data;
};

export const getWeatherByCity = async (cityURL) => {
  const api = await fetch(`https://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityURL}`);
  const data = await api.json();
  const { current, location } = await data;
  const { condition } = current;
  return {
    name: location.name,
    country: location.country,
    temp: current.temp_c,
    condition: condition.text,
    icon: condition.icon,
    url: cityURL,
  };
};
