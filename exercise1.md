Python

For linting, pylint would be used as to enforce styling for the PEP8 styele convention, as to improve mainly readability and concistency.
For testing, we could use the built in unittest that comes in the standard Python library, although one could also use py.test for its ease of use comapred to unittest.
For deployment, it seems Docker could be use to create virtual instances of the script, while AWS could also be used for easier deployment due to the cloud-based system.

Alternative CI/CD solutions could include Spinnaker, GoCD, Bamboo, Gitlab, etc. It seems Gitlab is nice, as they allow a free self-hostable option, where premium only adds features that are typically needed for huge organizations, of which I am not one.

This setup would seem to be setup easier using the cloud, since it allows one to not have to focus on setting up the server and managing its resources. It is also probably more user-friendly and easier for beginners to get up and running. Self-hosting could be beneficial if one is obsessed with open-source software and likes to micro-manage everything, which in turn would provide more flexibility and nuance to the system as a whole. Although it seems online that may despise using Jenkins, so perhaps back to cloud-based environment it is.
