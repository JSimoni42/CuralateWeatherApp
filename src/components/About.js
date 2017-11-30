import React, { Component } from 'react';

class About extends Component {
  render() {
    return(
      <div>
        <h1>Hello!</h1>
        <div className="spacer"></div>
        <p>
          Hopefully, by this point, you've played around with the app a bit and have a feel for
          some of the features. It's a pretty straightforward, React app that uses some Google apis for
          the autocomplete on the 'Search' tab (credit goes to --- for implementing a wonderful component),
          and for getting Google Places information from a latitude and longitude (activated by the 'pin' icon also on
          the aforementioned tab). The latitude and longitude gets sent off to Dark Sky Api
          (JavaScript api implemented by Dean Verlanger) to get weather data.
        </p>
        <div className="spacer"></div>
        <p>
          The source code is located <a href="https://github.com/JSimoni42/CuralateWeatherApp">here</a>. Once you're done,
          feel free to browse my <a href="https://github.com/JSimoni42">gitHub page</a> or check out my <a href="https://github.com/JSimoni42">portfolio.</a>
          If you like what you see, don't hesitate to reach out to me at <a href="mailto:jsimoni03@gmail.com">jsimoni03@gmail.com</a>. I'm always interested in
          meeting up for a cup of coffee or a beer.
        </p>
        <div className="spacer"></div>
        <p>Regards,</p>
        <p>John</p>
      </div>
    );
  }
}

export default About;
