import { Fade, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import greenbirb from "../Photos/greenbirb.png";
import { ListOfTests } from "../ListOfTests";

export const Relinquish = () => {
  return (
    <Fade in={true} timeout={400}>
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
          <img src={greenbirb} width="400px" />
        </Box>
        <Typography variant="h1" sx={{ mt: 2 }}>
          Relinquish
        </Typography>
        <Box sx={{ width: "600px", maxWidth: "100%" }}>
          <Typography variant="body1" sx={{ mb: 4, mt: 2 }}>
            Often a parrot is surrendered because an owner feels they have no other choice or is
            unaware of resources that can keep their parrot in their home. We may be able to help
            you find alternatives to surrendering your beloved parrot.
            <br />
            <br />
            The best possible option is for your parrot to stay with you. There are many resources
            available that could help you address medical or behavioral challenges. If your bird has
            a behavioral problem that is causing you to want to relinquish please contact us. We
            will try to help with the problem. We want nothing more than to help you keep your
            feathered companion!
            <br />
            <br />
            Our goal is to help as many parrots as possible to remain with their owners, and if that
            is not possible, to provide a loving and nurturing environment for the parrots in our
            care until a permanent home is found.
            <br />
            <br />
            Many parrot-related problems are solvable! Talk to our staff about your situation.
            Whether it&apos;s a behavior problem, a housing issue, or another kind of crisis,
            we&apos;re here to help and advise you. Call us to discuss your situation. You may have
            special circumstances that require you to give up your parrot. Please make sure that you
            have committed the time and energy to work with your parrot before you give up your
            parrot. Many issues can be resolved with the right information and we would be happy to
            guide you to resources that might help you to work through any issues with your parrot.
            Make sure you have considered all of your alternatives to relinquishing your parrot.
          </Typography>
          <Typography variant="h2" sx={{ mb: 2, mt: 2 }}>
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
          <Typography variant="h2" sx={{ mb: 2, mt: 2 }}>
            Re-Home Your Parrot Without Taking Them to a Shelter
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, mt: 2 }}>
            No one knows your pet better than you. You know his/her likes, dislikes, interests and
            temperament, therefore you have a far greater chance of finding a successful new home
            than anyone else. Perhaps you could find your parrot a home with a friend or family
            member who knows your parrot well. You can continue to see your pet so that he/she
            doesn&apos;t feel abandoned, and you can remain confident that he/she is being cared
            for. Be very careful when handing your pet over to a stranger you have met online or
            through acquaintances. Share your expectations for your pet&apos;s new home and be sure
            to ask questions to identify a home that will be a good fit for your parrot. Make sure
            that you check references to ensure the person is responsible and ask that they reach
            back out to you in the event that they can no longer care for your pet. By making a
            determined effort to re-home your parrot, not only will you be giving him/her a better
            future – you&apos;ll also be creating a future for another animal by leaving a spot open
            at our shelter.
          </Typography>
          <Typography variant="h2" sx={{ mb: 2, mt: 2 }}>
            Surrender Your Parrot
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, mt: 2 }}>
            A Refuge for Saving the Wildlife is a no-kill shelter serving northern Illinois. We do
            take relinquished parrots as space allows. We understand that sometimes it may be
            necessary to give up a parrot and we will do our very best to place yours into a new
            home. However, shelters are places with many animals and strangers, new routines, and
            are noisy and are stressful to animals that are accustomed to being in a home
            environment. Shelters should be used as a last resort.
            <br />
            <br />
            When you surrender your parrot, you are giving up all legal ownership rights to the
            animal. Legal ownership and responsibility are transferred to A Refuge for Saving the
            Wildlife. We take your parrot&apos;s well-being very seriously and have a compassionate
            and dedicated team who will provide your parrot with loving care.
            <br />
            <br />
            Below is a relinquishment form that we ask you to fill out upon considering
            relinquishment of your parrot. This helps us to know and understand your parrot&apos;s
            likes and dislikes so that we may better provide for them. As long as your parrot&apos;s
            avian health tests are up-to-date, we do not charge a fee to take your parrot into our
            flock, but donations are always welcome! Each bird will be considered and evaluated
            before coming into our flock. Please understand, we do not refuse a bird because it is
            not hand tame or because it has health or behavioral issues. We simply ask that you
            fully disclose this information to us so we may serve the parrot in the best manner
            possible.
          </Typography>
          <Typography variant="h2" sx={{ mb: 2, mt: 2 }}>
            Reliquishment Process
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, mt: 2 }}>
            Thank you for trusting A Refuge for Saving the Wildlife with the future happiness of
            your companion parrot and for being compassionate enough to do the right thing.
          </Typography>
          <Typography variant="h3" sx={{ mb: 2, mt: 2 }}>
            Step 1
          </Typography>
          To have your parrot considered for relinquishment to A Refuge for Saving the Wildlife,
          please complete the relinquishment form available on this website. The legal guardian of
          the animal must fill out the questionnaire. We require detailed information of the needs
          of your parrot, dimensions of the cage, a list of favorite toys, diet, routine, feather
          condition, and history. All information must be made known to us and complete health
          information (documented, listed below) are all necessary before we can begin to help your
          bird.
          <Typography variant="h3" sx={{ mb: 2, mt: 2 }}>
            Step 2
          </Typography>
          After reading your questionnaire, we will contact you to discuss the next steps. Keep in
          mind that filling out the questionnaire does not mean we will be able to take your parrot.
          <Typography variant="h3" sx={{ mb: 2, mt: 2 }}>
            Step 3
          </Typography>
          There are fees to relinquish your parrot. We require recent avian health test results and
          general examinations in advance of relinquishment for any parrot we help to place, take
          in, or otherwise commit to re-home. These tests include:
          <br />
          <ListOfTests />
          We must protect our resident and future parrots, as well as those in foster care. We do
          expect that you will be able to supply current vet records upon consideration of accepting
          your parrot.
          <Typography variant="h3" sx={{ mb: 2, mt: 2 }}>
            Final Note
          </Typography>
          We wish we could take every animal, but we are limited by the amount of space and staff we
          have to adequately take care of them.
        </Box>
      </Box>
    </Fade>
  );
};
