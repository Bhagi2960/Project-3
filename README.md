
Introdcution 


* A Comprehensive analysis of water monitoring stations across California that are geographically dispersed.
* Studied four different types of water stations. i.e.  Surface Water, Ground Water, Water Quality, and Tide stations
* obtained from the water board of California which is an open source site
* Limited the Data set to the State of California for convenience of data gathering purposes
* Purpose and Usage of Analysis: For water supply of crops for Farmers etc, and government entities such as the EPA(environment Protection Agency) could use this analysis for water quality measurement etc.
* Used two data sets for our analysis –Data set 1 -  Consists of 1115 records
* Our visiualizations include  a Geo Spatial Map(built using Java Script, Html, Css and Flask app), A bar chart using Matplotlib and an interactive map using Bokeh library.
* A K means  clustering analysis is also performed using the geo coordinates.


ETL Process:

We used PostgreSQL as the choice of database to store the data.
We extracted the data from the following open source site:https://www.waterboards.ca.gov/resources/data_databases/
The data was available on the site as csv files.
We sued data sets. 
Data set 1 was used for the Geo Map and the Bar chart and data set 2 was used for the interactive chart mao that used Bokeh as a library.

The data set consisted of water station types, the county, latitude, longitude etc.
For data set 1 the data was cleaned by dropping two columns that had a large number of null values and in the remaining columns the null values were dropped and our final data count was 1115.
Used SQLAlchemy to directly connect to the PostgreSQL database via ORM and the corresponding table was created the data was imported  via sqlalchemy.

*  Details of the data can be found under the folder 'Origina and Cleaned Data' along with the jupyter notebook file used for cleaning.



Interactive Map
•Developed using an interactive map allowing users to visualize station distributions and clustering
•Features filtering options by station type
•Provides detailed information through clickable markers
•Hosted on a Flask web application for seamless user interaction
Enables users to filter data according to their needs and access comprehensive station information

*Instructions to use the Geomap and interact with the user ineterface:

1)To render the Geo map and interact with the user interface, please perform the following:
a)You need to have all ncessary files in the relevant folder.
a)Please navigate to the folder in which the app.py file is stored.
b)Next, go to the command prompt and make sure you are in the folder where the app.py file is saved.
c)Next, in the command line, type : Flask run
d)The web page will render
e)Once the web page is rendered it will show all  water stations in the state of California on the starter page.
f)You can filter the stations by going by clicking on the drop down and picking a stations type.
h)Next, if you click on a marker , it will bring up a pop up with the type of station, name of station and the county it belongs to.


Clustering Analysis
•Implements KMeans algorithm to analyze geographical coordinates of monitoring stations
•Uncovers clustering patterns among the stations
•Complemented by a bar chart created with Matplotlib
•Illustrates the number of stations per county
•Highlights areas with varying station densities



