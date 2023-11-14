import { Fade, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import phoenix from "../Photos/phoenix.png";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import SchoolIcon from "@mui/icons-material/School";
import CottageIcon from "@mui/icons-material/Cottage";
import SearchIcon from "@mui/icons-material/Search";

export const About = () => {
  return (
    <Fade
      in={true}
      timeout={400}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 3,
          paddingLeft: 2,
          paddingRight: 2,
          maxWidth: "100%",
        }}
      >
        <Box
          sx={{ overflowX: "hidden", width: "100vw", display: "flex", justifyContent: "center" }}
        >
          <img
            src={phoenix}
            width="400px"
            style={{ borderRadius: "5px" }}
          />
        </Box>
        <Typography
          variant="h1"
          sx={{ mb: 2, mt: 2 }}
        >
          About
        </Typography>
        <Box sx={{ width: "600px", maxWidth: "100%" }}>
          This refuge was incorporated in the State of Illinois on July 26, 1999 and licensed by the
          Illinois Department of Agriculture, Bureau of Animal Welfare in February 2001 as a rescue
          facility.
          <br />
          <br />
          Our mission is simple: to work in joint cooperation with all avian rescue groups to try
          and eliminate the need for rescue groups by educating the public about avicultural issues.
          Until that is accomplished, we will provide a sanctuary for those unfortunate parrots that
          are in need of a home.
          <br />
          <br />
          A Refuge for Saving the Wildlife, Inc.’s goals are as follows: first and foremost, put all
          rescues such as ourselves out of the rescue business.
          <br />
          <br />
          Until then, we will:
          <List>
            <ListItem>
              <ListItemIcon>
                <VolunteerActivismIcon />
              </ListItemIcon>
              <ListItemText>
                Provide temporary housing and care for any and all Psittacine birds (not including
                those with fatal and/or contagious diseases)
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText>
                Educate the consumer public about the proper care of exotic birds
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CottageIcon />
              </ListItemIcon>
              <ListItemText>
                For those birds that are eligible for adoption, locate a healthy, happy and
                nurturing home, and
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText>
                Investigate cases of abuse, neglect and maltreatment of exotic birds and remove them
                from said owner
              </ListItemText>
            </ListItem>
          </List>
          A Refuge for Saving the Wildlife, Inc. came into existence when the founder/director,
          Richard Weiner, realized that there were many more of these highly intelligent birds than
          life-long, loving homes. Like many aviculturists (one who is involved with birds), Mr.
          Weiner began as a parrot parent, with an African Grey, Prince, who was followed by an
          Umbrella Cockatoo, Ninja. Before long, Mr. Weiner began taking in &quot;second hand
          birds&quot; from friends, business associates and from local veterinarians.
          <br />
          <br />
          A Refuge for Saving the Wildlife, Inc. houses many types of Psittacines (parrot-type
          birds). The number of birds went from 2 parrots eighteen years ago, to 16 as of our
          incorporation date. Of those 16, all have since been adopted into loving homes and have
          adapted well in their new environments. Others have come to take their places. Across our
          main facility and three foster homes, we now serve approximately 50-70 birds at any given
          time and there is a constant in-flow of new residents.
          <br />
          <br />
          A Refuge for Saving the Wildlife, Inc. is a rescue, retirement, and adoption facility for
          exotic birds. We offer birds a stable and loving home for the duration of their natural
          lives. We do not sell or breed birds. Some of the birds at the Refuge have &quot;special
          needs,&quot; including a range of physical handicaps or other challenges requiring unique
          living or feeding arrangements. Others have been bounced from home to home, often being
          physically and/or emotionally abused and have simply become too fearful of people to be
          &quot;pets&quot; any longer. We now have nineteen permanent Psittacine residents and a
          red-tailed hawk (more below).
          <br />
          <br />
          A few of the birds we see, despite our best efforts to help them reconnect, remain
          extremely fearful of humans and temperamentally unsuited for companionship with people. We
          search for other suitable alternatives for the birds who would simply be happiest in the
          exclusive company of their own kind. There is a wonderful, free-flight sanctuary in
          Bellingham, WA, called Mollywood where birds can thrive in a natural setting with minimal
          human interaction.
          <br />
          <br />
          Of course, along with birds with a variety of challenges, A Refuge for Saving the
          Wildlife, Inc. is also home to a number of perfectly &quot;normal&quot;, healthy and
          contented birds whose owners brought them here when life changes precluded the
          continuation of their caring for their beloved pets. These owners believe that the
          stability and ongoing responsible care provided by our facility, along with the with
          companionship of both people and other birds, is preferable to the possibility of their
          former companions being shuffled from home to home with no guarantees of responsible care
          or proper conditions.
          <br />
          <br />
          A Refuge for Saving the Wildlife, Inc. currently (2006) has a monthly overhead of between
          $3600.00 and $4500.00 (averaged over the year). This includes food, housing, medical care,
          and toys. There are NO paid staff members. While Mr. Weiner is both the principal
          caregiver and executive director of the organization, A Refuge for Saving the Wildlife,
          Inc. has developed a small cadre of volunteers to aid in the daily care of these birds as
          well as research, fundraising and long term planning for the organization.
          <br />
          <br />
          The balanced diet provided for the birds includes pelleted bird food, as well as fresh
          fruit and vegetables in season, frozen mixed vegetables, beans and pastas.
          <br />
          <br />
        </Box>
      </Box>
    </Fade>
  );
};
