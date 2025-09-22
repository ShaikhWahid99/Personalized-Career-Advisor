const Timeline = ({ events, language }) => {
  const getEventIcon = (type) => {
    switch (type) {
      case 'exam':
        return '📝';
      case 'admission':
        return '🎓';
      case 'scholarship':
        return '💰';
      default:
        return '📅';
    }
  };

  const getEventColor = (type) => {
    switch (type) {
      case 'exam':
        return 'border-blue-500 bg-blue-50';
      case 'admission':
        return 'border-green-500 bg-green-50';
      case 'scholarship':
        return 'border-yellow-500 bg-yellow-50';
      default:
        return 'border-gray-500 bg-gray-50';
    }
  };

  return (
    <div className="space-y-4">
      {events.map((event, index) => (
        <div key={event.id} className="flex items-start space-x-4">
          {/* Event Icon */}
          <div className={`flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center ${getEventColor(event.type)}`}>
            <span className="text-lg">{getEventIcon(event.type)}</span>
          </div>

          {/* Event Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium text-gray-900">
                {event.title[language]}
              </h4>
              <span className="text-xs text-gray-500 font-medium">
                {event.date}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              {event.description[language]}
            </p>
          </div>

          {/* Vertical Line */}
          {index < events.length - 1 && (
            <div className="absolute left-5 mt-10 w-0.5 h-6 bg-gray-300" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
