interface MajorCredits {
    credits: number;
    brand: 'Major';
  }
  
  interface MinorCredits {
    credits: number;
    brand: 'Minor';
  }

  function sumMajorCredits(subject1: Major, subject2: Major): Major {
    return {
      credits: subject1.credits + subject2.credits
    }
  }
   function sumMinorCredits(subject1: Minor, subject2: Minor): Minor {
    return {
      credits: subject1.credits + subject2.credits
    }
   }
