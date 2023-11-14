import { Fade, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import greenbirb from "../Photos/greenbirb.png";

export const Relinquish = () => {
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
            src={greenbirb}
            width="400px"
            style={{ borderRadius: "5px" }}
          />
        </Box>
        <Typography
          variant="h1"
          sx={{ mt: 2, mb: 2 }}
        >
          Relinquish
        </Typography>
        <Box sx={{ width: "600px", maxWidth: "100%" }}>
          <Typography
            variant="body1"
            sx={{ mb: 4, mt: 2 }}
          >
            <strong>The Refuge is not currently accepting new surrenders.</strong> We wish we could
            take every animal, but are limited by the amount of space and staff we have to
            adequately take care of them.
            <br />
            <br />
            Often a parrot is surrendered because an owner feels they have no other choice or is
            unaware of resources that can keep their parrot in their home. We may be able to help
            you find alternatives to surrendering your beloved parrot.
            <br />
            <br />
            The best possible option is for your parrot to stay with you. There are many resources
            available that could help you address medical or behavioral challenges. If your bird has
            a behavioral problem that is causing you to want to relinquish, please contact us. We
            will try to help with the problem. We want nothing more than to help you keep your
            feathered companion!
            <br />
            <br />
            Many parrot-related problems are solvable! Talk to our staff about your situation.
            Whether it&apos;s a behavior problem, a housing issue, or another kind of crisis,
            we&apos;re here to help and advise you. Call us to discuss your situation. You may have
            special circumstances that require you to give up your parrot. Please make sure that you
            have committed the time and energy to work with your parrot before you give up your
            parrot. Many issues can be resolved with the right information and we would be happy to
            guide you to resources that might help you to work through any issues with your parrot.
          </Typography>
          <Typography
            variant="h2"
            sx={{ mb: 2, mt: 2 }}
          >
            Helpful Resources
          </Typography>
          <ul>
            <li>
              <Link
                color="secondary"
                target="_blank"
                rel="noreferrer"
                href="https://nilesanimalhospital.com/pet-health-resources/articles/avian-articles/"
              >
                Avian Health
              </Link>
            </li>
            <li>
              <Link
                color="secondary"
                target="_blank"
                rel="noreferrer"
                href="http://www.goodbirdinc.com/"
              >
                Behavior issues
              </Link>
            </li>
          </ul>
          <Typography
            variant="h2"
            sx={{ mb: 2, mt: 2 }}
          >
            Re-Home Your Parrot Without Taking Them to a Shelter
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 4, mt: 2 }}
          >
            No one knows your pet better than you. You know his/her likes, dislikes, interests and
            temperament, therefore you have a far greater chance of finding a successful new home
            than anyone else. Perhaps you could find your parrot a home with a friend or family
            member who knows your parrot well. You can continue to see your pet so that he/she
            doesn&apos;t feel abandoned, and you can remain confident that he/she is being cared
            for. Be very careful when handing your pet over to a stranger you have met online or
            through acquaintances. Share your expectations for your pet&apos;s new home and be sure
            to ask questions to identify a home that will be a good fit for your parrot. Make sure
            that you check references to ensure the person is responsible and ask that they reach
            back out to you in the event that they can no longer care for your pet.
          </Typography>
        </Box>
      </Box>
    </Fade>
  );
};
