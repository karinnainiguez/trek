
const URL = 'https://ada-backtrek-api.herokuapp.com/trips';

const showTrips = () => {

  $('#all-trips').addClass('bordered');

  $('#all-trips > h2').html('All Trips');
  $('#all-trips > h2').addClass('bordered-bottom')

  $('#trip-list').empty();
  axios.get(URL)
  .then((response) => {
    let collection = response.data
    for (const trip of collection) {
      $('#trip-list').append(
        `<li class='bordered-bottom'>
          <a href="https://ada-backtrek-api.herokuapp.com/trips/${trip.id}">${trip.name}</a>
        </li>`
      );
    }
  })
  .catch((error) => {

  });

};



const showDetails = (event) => {
  event.preventDefault();
  const detailsLink = event.currentTarget.getAttribute('href');

  $('#trip-details').addClass('bordered');
  $('#trip-details').empty();


  $('#trip-details').html('<h2>Trip Details</h2>');
  $('#trip-details > h2').addClass('bordered-bottom');

  axios.get(detailsLink)
    .then((response) => {
      let trip = response.data;
      $('#trip-details').append(
        `<ul>
          <li><strong>Name: ${trip.name}</strong></li>
          <li><strong>Continent: </strong>${trip.continent}</li>
          <li><strong>Category: </strong>${trip.category}</li>
          <li><strong>Weeks: </strong>${trip.weeks}</li>
          <li><strong>Cost: </strong>$${trip.cost}</li>
          <li>
          <strong>About: </strong>
            <p>${trip.about}</p>
          </li>
        </ul>`
      );
    })
    .catch((error) => {

    });

};





$(document).ready(()=>{
  $('#all').click(showTrips);
  $('#trip-list').on('click', 'a', showDetails);
});