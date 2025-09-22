const Stepper = ({ steps, currentStep = 0, language = 'en' }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            {/* Step Circle */}
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-2 ${
                index <= currentStep
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-300 text-gray-600'
              }`}
            >
              {step.step}
            </div>

            {/* Step Content */}
            <div className="text-center max-w-24 sm:max-w-32">
              <h4 className="text-sm font-medium text-gray-800 mb-1">
                {step.title[language]}
              </h4>
              <p className="text-xs text-gray-600 leading-tight">
                {step.description[language]}
              </p>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="absolute top-5 flex-1 h-0.5 bg-gray-300 ml-10 hidden sm:block">
                <div
                  className={`h-full transition-all duration-300 ${
                    index < currentStep ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  style={{
                    width: index < currentStep ? '100%' : '0%',
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile friendly connector lines */}
      <div className="sm:hidden mt-4">
        {steps.map((_, index) => (
          index < steps.length - 1 && (
            <div
              key={`line-${index}`}
              className={`w-0.5 h-8 mx-auto my-2 ${
                index < currentStep ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          )
        ))}
      </div>
    </div>
  );
};

export default Stepper;
