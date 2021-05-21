import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import img from "../../assets/img/odrlModel.png";

const useStyles = makeStyles({
  imageStyle: {
    maxWidth: '90%',
    marginLeft: '35px',
  },
  container: {
    width: '100%',
  }
});

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem>
          <CustomTabs
            title=""
            headerColor="primary"
            tabs={[
              {
                tabName: "What is ODRL?",
                tabContent: (
                  <Card>
                    { <CardBody>
                      The Open Digital Rights Language (ODRL) is a policy expression language
                      that provides a flexible and interoperable information model, vocabulary,
                      and encoding mechanisms for representing statements about the usage of content
                      and services. The ODRL Information Model describes the underlying concepts, entities, and relationships that form the foundational basis for the semantics of the ODRL policies.
                      Policies are used to represent permitted and prohibited actions over a certain asset, as well as the obligations required to be meet by stakeholders. In addition, policies may be limited by constraints (e.g., temporal or spatial constraints) and duties (e.g. payments) may be imposed on permissions.
                    </CardBody>
                    }
                  </Card>
                ),

              },
              {
                tabName: "Diagram",

                tabContent: (
                  <div className={classes.container}>
                    <img src={img} alt={"Hi"} className={classes.imageStyle} />
                  </div>
                ),
              }
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
