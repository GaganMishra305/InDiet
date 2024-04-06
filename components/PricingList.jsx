import { check } from "../assets";
import { pricing } from "../constants";
import Image from 'next/image';

const PricingList = () => {
  return (
    <div className="flex gap-8 max-w-full lg:max-w-screen-lg">
      {pricing.map((item, index) => (
        <div
          key={item.id}
          className={`flex-shrink-0 w-[19rem] max-lg:w-full bg-n-8 border border-n-6 rounded-[2rem] py-8 px-6 lg:w-auto even:py-14 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3 ${index > 0 ? 'ml-8' : ''}`}
        >
          <h4 className="h4 mb-4">{item.title}</h4>

          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>

          <div className="flex items-center mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>

          {item.price ? (
            <a 
              className={`inline-block bg-white text-purple-900 text rounded-full py-3 px-6 transition duration-300 ease-in-out hover:bg-purple-500 hover:text-white w-full text-center`}
              href="/pricing"
            >
              Get started
            </a>
          ) : (
            <a 
              className={`inline-block bg-white text-purple-900 rounded-full py-3 px-6 transition duration-300 ease-in-out hover:bg-purple-600 hover:text-white w-full text-center`}
              href="/contact"
            >
              Contact us
            </a>
          )}

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <Image src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
